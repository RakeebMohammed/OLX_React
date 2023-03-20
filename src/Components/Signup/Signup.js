import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/firebaseContext';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')
  const {Firebase}=useContext(firebaseContext)
 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(Name);
  console.log(Password);
Firebase.auth().createUserWithEmailAndPassword(Email,Password).then(result=>{
  result.user.updateProfile({displayName:Name}).then(()=>{
    Firebase.firestore().collection('users').add({
      id:result.user.uid,username:Name,phone:Phone
    }).then(()=>{
 history.push('/login')
    })
  })
})
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt="logo" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input value={Name}
          onChange={(e)=>setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input value={Email}
          onChange={(e)=>setEmail(e.target.value)}

          className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input value={Phone}
          onChange={(e)=>setPhone(e.target.value) }
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input value={Password}
          onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
