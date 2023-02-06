import React from 'react'

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

function Signin() {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser} >Sign in with Google Popup</button>
    </div>
  );

};

export default Signin;
