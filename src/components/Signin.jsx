import React from "react";

import {
	signInWithGooglePopup,
  signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { Signup } from "./Signup";

function Signin() {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign-in Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={() => signInWithGoogleRedirect()}>Sign in with Google Redirect</button>

      <Signup/>
		</div>
	);
}

export default Signin;
