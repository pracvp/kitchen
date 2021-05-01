import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToPhonebook} from '../../services/phonebookServices';
import fire from '../../fire';
import { Button, Segment, Form } from 'semantic-ui-react'

import navbar from '../navbar';



const AddNumber = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();


    if (name && phone) {
      return addToPhonebook(name, phone);
    }
    return console.log('You must enter a name and a number');
  };
  
  return (
    <div>
      <Link to="/List">View Ingredient Book</Link>
      <div className="addnmber">
    <h2>Add Ingredient</h2>
  
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingredient Name"
        onChange={({ target }) => setName(target.value)}
      /><br />
      <br/>
      <input
        type="text"
        placeholder="Quantity"
        onChange={({ target }) => setPhone(target.value)}
      /><br />
      <br/>
      <Button basic color='violet' type="submit">
        Add number
      </Button>
    </form>
    </div>
    </div>
  )
};

export default AddNumber;