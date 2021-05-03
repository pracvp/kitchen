import axios from 'axios';
import fire from '../fire';
import Axios from 'axios'
const url = 'http://localhost:3001/api';
const Mongoose = require('mongoose');


const createToken = async () => {
  const user = fire.auth().currentUser;
  const token = user && (await user.getIdToken());

  const payloadHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return payloadHeader;
}
let idd;
export const addToPhonebook = async (name, number) => {
  const header = await createToken();
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.email);
      idd=user.email;
    } 
  });

  console.log(name+" "+number+" "+idd);
  const payload = {
    name,
    number,
    idd
  }
  try {
    console.log(payload);
    const res = await Axios.post(url, payload, header);
    return res.data;

  } catch (e) {
    console.error(e);
  }
};

export const getPhonebookEntries = async () => {
  const header = await createToken();
  
  try {
    const res = await Axios.get(url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export const handleDeleteProperty = async (idsent) => {
  const header = await createToken();
  idsent.trim()
  const id = Mongoose.Types.ObjectId(idsent);
  const url= 'http://localhost:3001/api/'+id;
  try{
    console.log(url+" "+id);

      const res = await Axios.delete(url,header,id);
    console.log(res);
   //   if(res.data.success){
      //    alert(res.data.msg);
          return res.data;
     // }
  }
  catch(err){
      console.error(err);
  }
}

/*
export const deletePhonebook = async (name, number) => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.email);
idd=user.email;
console.log(idd+"  ikop  "+ "hey from delete")
    } 
  });

  try {
    
    const res = await axios.axios.delete(url, {
      params: { name: name,number: number, idd:idd}
      })
    return res.data;

  } catch (e) {
    console.error(e);
  }
}; 
 */