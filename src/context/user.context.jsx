// import react
import { createContext, useState, useEffect } from 'react';

import {onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils"

// export context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// export context provider
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
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
