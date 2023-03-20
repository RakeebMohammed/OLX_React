import React, { useContext, useEffect, useState } from 'react';
import { firebaseContext } from '../../store/firebaseContext';
import { postContext } from '../../store/postContext';

import './View.css';
function View() {
  const [userDeatails, setuserDeatails] = useState('')
  const {PostDetails}=useContext(postContext)
 const {Firebase}=useContext(firebaseContext)
  useEffect(() => {
    const {userId}=PostDetails
   Firebase.firestore().collection('users').where('id','==',userId).get().then(res=>{
    res.forEach(doc=>{
setuserDeatails(doc.data())
    })
   })
  }, [])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.price} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
      { userDeatails && <div className="contactDetails">
          <p>{userDeatails.username}</p>
          <p>{userDeatails.phone}</p>
          <p>1234567890</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
