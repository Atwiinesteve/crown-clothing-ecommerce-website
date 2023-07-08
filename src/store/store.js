// imports
import { configureStore } from "@reduxjs/toolkit";

// import reducers
import userSlice from '../store/user/user.reducer'

// store
const store = configureStore({
    reducer: {
        user: userSlice
    }
});

// exports
export default store;