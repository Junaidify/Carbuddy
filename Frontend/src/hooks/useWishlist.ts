import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading, setWishlist } from "../reducers/wishlistReducer";


export const useWishlist = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getWishlist = async () => {
            dispatch(setLoading());
            try {
                const res = await axios.get('http://localhost:3000/savelater');
                if (res.status === 200) {
                    dispatch(setWishlist(res.data));
                }
                else {
                    dispatch(setError());
                    console.log("Invalid request in useWishlist");
                }
            }
            catch (err) {
                dispatch(setError());
                console.log("Wishlist API call error", err);
            }
        }

        getWishlist();
    }, [dispatch]);

}