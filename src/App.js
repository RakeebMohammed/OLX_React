import React, { useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Create from './Components/Create/Create'
import Postesh from './store/postContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { authContext, firebaseContext } from './store/firebaseContext';
import ViewPost from './Pages/ViewPost';

function App() {
  
  
  const {setUser}=useContext(authContext)
  const {Firebase}=useContext(firebaseContext)

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user)=>{
console.log(user.displayName);  
setUser(user)
    })
 
  }, [])
  
  return (
    <div>
   <Postesh>
      <Router>
        <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
      <Signup/>
      </Route>
      <Route path='/login'>
      <Login/>
      </Route>
      <Route path='/create'>
      <Create/>
      </Route>
      <Route path='/view'>
     <ViewPost/>
      </Route>
      </Router>
      </Postesh>
    </div>
  );
}

export default App;
