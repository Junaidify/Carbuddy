import axios from "axios";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { setCars, setError, setLoading } from "../reducers/carsReducer";

export const useFetch = (url: string, category: string): void => {
  const dispatch = useDispatch();

  useMemo(() => {
    const getFetch = async () => {
      dispatch(setLoading());

      try {
        const res = await axios.get(url, {
          params: {
            category: category
          }
        });

        if (res.status === 200) {
          dispatch(setCars(res.data));
        } else {
          dispatch(setError());
          console.log("Invalid request in useFetch");
        }
      } catch (err) {
        dispatch(setError());
        console.log("useFetch error", err);
      }
    };
    getFetch();

    return () => {
      getFetch();
    };

  }, [url, category, dispatch]);
};
