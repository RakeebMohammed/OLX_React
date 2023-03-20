import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseContext } from '../../store/firebaseContext';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const history=useHistory()
  const {Firebase}=useContext(firebaseContext)
  const handleLogin=(e)=>{
e.preventDefault()
Firebase.auth().signInWithEmailAndPassword(Email,Password).then(()=>{
  history.push('/')
}).catch(()=>{
  alert('error occured')
})
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input value={Email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input value={Password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
