import axios from "axios";
import { useEffect, useState } from "react";
import { CarPropTypes } from "../constant/interfaces";

export const useProduct = (id: string) => {
    const [saveCar, setSaveCar] = useState<CarPropTypes>();

    useEffect(() => {
        const getFetch = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/cars/${id}`);
                if (res.status === 200) {
                    setSaveCar(res.data);
                } else {
                    console.log("Invalid request in useFetch");
                }
            } catch (err) {
                console.log("useFetch error", err);
            }
        };
        getFetch();

    }, [id]);

    return saveCar;
};
