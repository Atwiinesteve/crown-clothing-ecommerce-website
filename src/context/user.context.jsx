// import react
import { createContext, useState } from 'react';

// export context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// export context provider
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    return <UserContext.Provider value={value} > {children} </UserContext.Provider>
};
