import React from "react";

import { SignInForm } from "../components/SigninForm";
import { Signup } from "../components/Signup";

import '../styles/Authentication.css';

function Signin() {

	return (
		<div className="authentication-page">
			{/* <button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={() => signInWithGoogleRedirect()}>
				Sign in with Google Redirect
			</button> */}

			<SignInForm />
			<Signup />
		</div>
	);

}

export default Signin;