const phonesRouter = require('express').Router();
const Phone = require('../models/phone');
const cors = require('cors');

const mongo = require('mongodb')

phonesRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const phones = await Phone.find({});
    return res.json(phones.map((phone) => phone.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

phonesRouter.post('/', (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const phone = new Phone(req.body);
    const savedPhone = phone.save();

    return res.status(201).json(savedPhone);
  }
  return res.status(403).send('Not authorized');
});


/*phonesRouter.delete('/:id', async (req, res) => {
  const auth = req.currentUser;
  if(auth)
 { try{
  console.log(" delete");
await Phone.findByIdAndDelete(mongo.ObjectId(req.body.id));
      return  res.status(200).json({ success: true, msg: 'Product Deleted' });
  }
  catch(err){
      console.error(err); 

  }
}
}); 

.delete('/608d7420c5fec40f3cda6b62',function(req, res){
console.log("hi")
const headers = {
  'Authorization': 'Bearer paperboy'
}
const data = {
  foo: 'bar'
}

axios.delete('https://foo.svc/resource', {headers, data})

});
*/
phonesRouter.delete("/:id", cors(), function(req, res) {
  const auth = req.currentUser;
console.log(req.params.id+ "From backend");
  const query={_id:mongo.ObjectId(req.params.id)};
  console.log("The notes id is "+ mongo.ObjectId(req.params.id));  
  Phone.findOneAndDelete(query, function(err) {
    if(!err) {
        res.status(200).json({ message: 'The item got successfully deleted', error: false });
    } else {
        res.status(500).json({message : 'Oops and error occurred', error : true});
    }
  })
 // return res.status(403).send('Not authorized');
  
}) 




module.exports = phonesRouter;
