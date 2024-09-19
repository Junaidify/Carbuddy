import { createSlice } from "@reduxjs/toolkit";
import { WishlistInitialState, } from "../constant/interfaces";


const wislistInitialState: WishlistInitialState = {
    isLoading: false,
    isError: false,
    wishlist: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: wislistInitialState,
    reducers: {
        setLoading: (state): void => {
            state.isLoading = true;
        },
        setError: (state): void => {
            state.isLoading = false;
            state.isError = true;

        },
        setWishlist: (state, action): void => {
            state.isLoading = false;
            state.isError = false;
            state.wishlist = action.payload;
        }
    }
})

export const { setError, setLoading, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;