import {} from "react";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { InitialStatePropTypes } from "../constant/interfaces";

const SuvCar = () => {
  useFetch("http://localhost:3000/cars", "");
  const { isLoading, isError, cars } = useSelector(
    (state: InitialStatePropTypes) => state.cars
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;


  return (
    <div>
      {cars.map((car: any) => (
        <div key={car._id}>
          <h1>{car.name}</h1>
          <p>{car.description}</p>
          <p>{car.price}</p>
          <p>{car.category}</p>
        </div>
      ))}
    </div>
  );
};

export default SuvCar;
