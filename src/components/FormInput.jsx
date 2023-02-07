import React from 'react';

import '../../src/styles/Signup.css'

export const FormInput = ({ label, ...otherProps}) => {
 return (
    
        <div className="group">
            <input className="form-input" { ...otherProps } />
            { label && (
                <label className={`${otherProps.value.length ? 'shrink' : null } form-input-label`}>{ label }</label>
            ) }
        </div>
 )
}