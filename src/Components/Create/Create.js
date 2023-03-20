import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { authContext, firebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';



const Create = () => {
  const history=useHistory()
  const [Name, setName] = useState('')
  const [Category, setCategory] = useState('')
  const [Price, setPrice] = useState('')
 
  const [Image, setImage] = useState(null)
  const {User}=useContext(authContext)
  const {Firebase}=useContext(firebaseContext)
  const date=new Date()
  const handleSubmit=(e)=>{
    e.preventDefault()
Firebase.storage().ref(`/image/${Image.name}`).put(Image).then(({ref})=>{
  ref.getDownloadURL().then((url)=>{
    console.log(url);
    Firebase.firestore().collection('products').add({
      Name,Category,Price,url,userId:User.uid,
    createdAt  :date.toDateString()
    })
    history.push('/')
  })
})
  }
 
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input value={Name} onChange={(e)=>{
             setName (e.target.value)
            }}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input value={Category} onChange={(e)=>{
              setCategory(e.target.value)
            }}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={Price} onChange={(e)=>{
             setPrice (e.target.value)
            }} className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={Image?URL.createObjectURL(Image):''}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])
            }/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
