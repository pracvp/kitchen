const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const decodeIDToken = require('./authenticateToken');
const phonesRouter = require('./controllers/phones');
const app = express();

mongoose.connect(
  'mongodb://localhost:27017/kitchenDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Error connecting to DB', err.message);
  });
  app.use(cors());
  app.use(express.json());
  app.use(decodeIDToken);
  
  app.use('/api', phonesRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});