import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPhonebookEntries } from '../../services/phonebookServices';
import fire from '../../fire'
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
    return ( <tr>
      <td>{entry.name}</td>
      <td>{entry.number}</td>
    </tr> 
  );
  }  
});
}


  return (
    <div>
      <Link to="/add-number">Add number</Link>
      <h2>Phone numbers</h2>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
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