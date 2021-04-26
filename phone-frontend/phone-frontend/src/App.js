import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import main_page from './components/main_page';
import Search from './components/Search';
import fire from './fire.js';
import Login from './components/session/Login';
import ListAllNumbers from './components/phonebook/ListAllNumbers';
import AddNumber from './components/phonebook/AddNumber';
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
              <Route path="/">
                <Login />
              </Route>
            </Switch>
            </>
          ) 
          : (
            <>
            <span onClick={signOut}>
              <a href="#">Sign out</a>
            </span>
            <Switch>
              <Route path="/add-number">
                <AddNumber />
              </Route>
              <Route path="/home">
                <main_page />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/List">
                <ListAllNumbers />
              </Route>
            </Switch>
            </>
          
          )}
      </Router>
    </div>
  );
}

export default App;
