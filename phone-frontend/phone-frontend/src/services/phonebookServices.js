import axios from 'axios';
import fire from '../fire';

const url = 'http://localhost:3001/api';

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
console.log(idd+"  ikop")
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
    const res = await axios.post(url, payload, header);
    return res.data;

  } catch (e) {
    console.error(e);
  }
};

export const getPhonebookEntries = async () => {
  const header = await createToken();

  try {
    const res = await axios.get(url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}