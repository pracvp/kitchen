import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBq1cekXzYUKtvckm9Md_WWEwLpguqQ8SE",
  authDomain: "kitchen-leftover.firebaseapp.com",
  databaseURL: "https://kitchen-leftover-default-rtdb.firebaseio.com",
  projectId: "kitchen-leftover",
  storageBucket: "kitchen-leftover.appspot.com",
  messagingSenderId: "609528323628",
  appId: "1:609528323628:web:3f3ce08e2ca9fda90d3b89",
  measurementId: "G-8CR1XH5Q71"
};


try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;
export default fire;