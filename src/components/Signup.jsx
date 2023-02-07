// importing react
import React, { useState } from "react";

// importing utils
import {
	createUserAAuthWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// importing styles
import "../styles/Signup.css";
import { FormInput } from "./FormInput";

// default form values
const defaultFormValues = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

// signup form
export const Signup = () => {
	const [formFields, setFormFields] = useState(defaultFormValues);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	// reset form values
	const resetForm = () => {
		setFormFields(defaultFormValues);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match..");
			return;
		}
		try {
			const { user } = await createUserAAuthWithEmailAndPassword(
				email,
				password,
			);
			await createUserDocumentFromAuth(user, { displayName });
			resetForm();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user. Email already in use..");
			} else {
				console.log(error.message);
			}
		}
	};

	return (
		<>
			<h1>Sign-up with email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="name"
					onChange={handleChange}
					type="text"
					required
					name="displayName"
					value={displayName}
				/>

				<FormInput
					label="email"
					onChange={handleChange}
					type="email"
					required
					name="email"
					value={email}
				/>

				<FormInput
					label="password"
					onChange={handleChange}
					type="password"
					required
					name="password"
					value={password}
				/>

				<FormInput
					label="Confirm password"
					onChange={handleChange}
					type="text"
					required
					name="confirmPassword"
					value={confirmPassword}
				/>

				<button type="submit">Signup</button>
			</form>
		</>
	);
};
