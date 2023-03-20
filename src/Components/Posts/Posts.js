import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Heart from '../../assets/Heart';
import {  firebaseContext } from '../../store/firebaseContext';
import { postContext } from '../../store/postContext';
import './Post.css';

function Posts() {
  const {Firebase}=useContext(firebaseContext)
useEffect(() => {
 Firebase.firestore().collection('products').get().then(snapshot=>{
const allPost=snapshot.docs.map((product)=>{
  return { ...product.data(),id:product.id }
})
console.log(allPost);
setProduct(allPost)
 })

}, [])
const [Product, setProduct] = useState([])
const {PostDetails,setPostDetails}=useContext(postContext)
const history=useHistory()
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         { Product.map(item=>{
         return  <div
           className="card" onClick={()=>{
            setPostDetails(item)
history.push('/view')
           }}
         >
           <div className="favorite">
             <Heart></Heart>
           </div>
           <div className="image">
             <img src={item.url} alt="" />
           </div>
           <div className="content">
             <p className="rate">&#x20B9; {item.Price}</p>
             <span className="kilometer">{item.Category}</span>
             <p className="name"> {item.Name}</p>
           </div>
           <div className="date">
             <span>{item.createdAt}</span>
           </div>
         </div>

         }) 
        }
        </div>
      </div>
      
       
      
    </div>
  );
}

export default Posts;
