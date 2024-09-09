import { useSelector } from "react-redux";
import { CarPropTypes, InitialStatePropTypes } from "../constant/interfaces";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id, category } = useParams();
  useFetch("http://localhost:3000/cars", category || "SUV");
  const { cars } = useSelector((state: InitialStatePropTypes) => state.cars);
  const [filteredData, setFilteredData] = useState<CarPropTypes>();

  useEffect(() => {
    if (cars.length > 0) {
      const matchedCar = cars.find((car: CarPropTypes) => car._id === id);
      setFilteredData(matchedCar);
    }
  }, [cars, id]);

  console.log(filteredData);

  return (
    <div>
      {filteredData && (
        <div key={filteredData._id}>
          <div>
            <img src={filteredData.image} alt="" />
          </div>
          <p>{filteredData.name}</p>
          <p>{filteredData.seater}</p>
          <p>{filteredData.transmission}</p>
          <p>{filteredData.mileage}</p>
          <p>{filteredData.bookingAmount}</p>
          <p>{filteredData.fuel}</p>
          <p>{filteredData.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
