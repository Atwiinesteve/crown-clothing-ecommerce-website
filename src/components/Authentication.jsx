import React from "react";

import SignInForm from "../components/SigninForm";
import Signup from '../components/Signup';

import '../styles/Authentication.css';

function Signin() {

	return (
		<div className="authentication-page">
			<SignInForm />
			<Signup />
		</div>
	);

}

export default Signin;