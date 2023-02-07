import React from "react";

// import {
// 	signInWithGooglePopup,
// 	signInWithGoogleRedirect,
// 	createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";
import { SigninForm } from "./SigninForm";
import { Signup } from "./Signup";

function Signin() {

	return (
		<div>
			<h1>Sign-in Page</h1>
			{/* <button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={() => signInWithGoogleRedirect()}>
				Sign in with Google Redirect
			</button> */}

			<SigninForm />
			<Signup />
		</div>
	);

}

export default Signin;