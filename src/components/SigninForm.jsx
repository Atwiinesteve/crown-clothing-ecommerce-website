// importing react
import React, { useState } from "react";

// importing utils
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signinUserAAuthWithEmailAndPassword
} from "../utils/firebase/firebase.utils";

// importing styles
import "../styles/Signup.css";
import { FormInput } from "./FormInput";
import { Button } from "./Button";

// default form values
const defaultFormValues = {
	email: "",
	password: ""
};

// signup form
export const SigninForm = () => {

	const [formFields, setFormFields] = useState(defaultFormValues);
	const { email, password } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	// reset form values
	const resetForm = () => {
		setFormFields(defaultFormValues);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await signinUserAAuthWithEmailAndPassword(email, password);
			console.log(response);
			resetForm();
		} catch (error) {
			
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account</h2>
			<span>Sign-up with email and password</span>
			<form onSubmit={handleSubmit}>

				<FormInput
					label="email"
					onChange={handleChange}
					type="email"
					name="email"
					required
					value={email}
				/>

				<FormInput
					label="password"
					onChange={handleChange}
					type="password"
					name="password"
					required
					value={password}
				/>

				<div className="btn-container">
					<Button type="submit">SIGN IN</Button>
					<Button buttonType='google' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
				</div>

			</form>
		</div>
	);
};
