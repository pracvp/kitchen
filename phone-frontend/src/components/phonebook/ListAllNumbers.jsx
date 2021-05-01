import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPhonebookEntries } from '../../services/phonebookServices';
import fire from '../../fire'
import { Button, Segment, Form } from 'semantic-ui-react'
import { handleDeleteProperty} from '../../services/phonebookServices';
let str;
const ListAllNumbers = () => {
  const [entries, setEntries] = useState();


  
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
str=user.email;
    } 
  });
  console.log(str)

  useEffect(() => {
    const fetchEntries = async () => {
      const fetchedEntries = await getPhonebookEntries();
      setEntries(fetchedEntries);
    }
    fetchEntries();
  }, [])

  if (entries === undefined) {
    return null;
  }

  
const givetable = () => {
  
  return entries.map(entry => {
 // console.log(entry.idd+ " email "+ str+ " strrr")
  if (entry.idd === str) {
    return ( <tr key={entry._id}>
      <td>{entry.name}</td>
      <td>{entry.number}</td>
      <td><Button basic color='violet' type="submit" onClick={e => handleDeleteProperty(entry.id)}>  
      Remove
      </Button>
</td>
    </tr> 
  );
  }  
});
}


  return (
    <div>
      <Link to="/add-number">Add Ingredient</Link>
      <h2>Ingredient Book</h2>
      
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {givetable()}
        </tbody>
      </table>
    </div>
  ) 
};

export default ListAllNumbers;