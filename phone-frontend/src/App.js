import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Main_page} from './components/Main_page';
import Search from './components/Search';
import fire from './fire.js';
import Login from './components/session/Login';
import ListAllNumbers from './components/phonebook/ListAllNumbers';
import AddNumber from './components/phonebook/AddNumber';
import Register from './components/Register'
//import { AuthProvider, AuthContext } from "./components/Auth";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  const signOut = () => {
    fire.auth().signOut()
  };
  
  console.log(isLoggedIn);
 
  return (
    <div className="App">
      <Router>
        {!isLoggedIn
          ? (
            <>
            <Switch>
            <Route exact path="/register" component={Register} />

              <Route path="/">
                <Login />
              </Route>

            </Switch>
            </>
          ) 
          : (
            <>
            <span onClick={signOut}>
            <Main_page />
            </span>
            <Switch>
              <Route path="/add-number">
                <AddNumber />
              </Route>
            
              <Route path="/List">
                <ListAllNumbers />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/home">
                <Main_page />
              </Route>
            </Switch>
            </>
          
          )}

      </Router>
    </div>
  );
}

export default App;
