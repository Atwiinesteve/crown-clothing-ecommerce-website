// import react
import { createContext, useEffect, useReducer } from 'react';

import {onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils"

// export context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


// ================== reducer ===============

const INITIAL_STATE = {
    currentUser: null
};

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const {type, payload} = action;
    console.log("dispatched")
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Invalid action type ${type} in userReducer`);
    }
}

// ==========================================


// export context provider
export const UserProvider = ({ children }) => {
    
    const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) createUserDocumentFromAuth(user);
            setCurrentUser(user)
        });
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value} > {children} </UserContext.Provider>
};
