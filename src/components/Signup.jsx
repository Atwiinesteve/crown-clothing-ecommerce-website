// importing react
import React, { useState } from "react";

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const Signup = () => {
    
    const [ formFields, setFormFields ] = useState(defaultFormValues);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <>
            <h1>Sign-up with email and password</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input onChange={() => handleChange()} type="text" required name="displayName" value={displayName} />

                <label htmlFor="email">Email</label>
                <input onChange={() => handleChange()} type="email" required name="email" value={email} />

                <label htmlFor="password">Password</label>
                <input onChange={() => handleChange()} type="password" required name="password" value={password} />

                <label htmlFor="password">Confirm Password</label>
                <input onChange={() => handleChange()} type="text" required name="confirmPassword" value={confirmPassword} />

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

