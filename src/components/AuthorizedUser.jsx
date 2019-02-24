import React from 'react';
import firebase from 'firebase';
import './authorized-user.css';


export const AuthorizedUser = (props) => {
  return (
    <div className="authorized-user">
        <img src={firebase.auth().currentUser.photoURL} alt="User github avatar" />
      <button className="auth-btn" onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
} 