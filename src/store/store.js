// imports
import { configureStore } from "@reduxjs/toolkit";

// import reducers
import userSlice from '../store/user/user.reducer'
import categoriesSlice from "./categories/categoriesSlice";

// store
const store = configureStore({
    reducer: {
        user: userSlice,
        categories: categoriesSlice
    }
});

// exports
export default store;