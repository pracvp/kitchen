import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
require('firebase/auth')

var firebaseConfig = {
  apiKey: "AIzaSyDZPb56iehrF6yxQlSdgrrgRE2PYKMOLUI",
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
const auth = firebase.auth();
	
auth.onAuthStateChanged(function(user){
		
  if(user){
    
    var email = user.email;
    alert("Active User " + email);
    
    //Take user to a different or home page

    //is signed in
    
  }else{
    
    alert("No Active User");
    //no user is signed in
  }
  
  
  
});


const fire = firebase;
export default fire;