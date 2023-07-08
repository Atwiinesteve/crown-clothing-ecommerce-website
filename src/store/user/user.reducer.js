// imports
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
	currentUser: null
};

// user Sclice
const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload
		}
	}
});

// exports
export const {setCurrentUser} = userSlice.actions;
export default userSlice.reducer;