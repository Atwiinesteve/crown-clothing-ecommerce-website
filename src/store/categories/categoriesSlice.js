// imports
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
	categories: [],
};

// cart slice
const categoriesSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart(state, action) {
			state.categories = action.payload;
		},
	},
});

// exports
export const { setCart } = categoriesSlice.actions;
export default categoriesSlice.reducer;
