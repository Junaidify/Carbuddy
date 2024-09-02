import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { InitialStatePropTypes } from "../constant/interfaces";

// import styling
import "../styles/carcategorypage.css";
import img from "../images/service_section_img.jpg";

const RootComponentOfCars = ({ category }: { category: string }) => {
  useFetch("http://localhost:3000/cars", category);
  const { isLoading, isError, cars } = useSelector(
    (state: InitialStatePropTypes) => state.cars
  );
  const [filteredData, setFilteredData] = useState<any>(cars);

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (checked) {
      setFilteredData(cars.filter((car: any) => car.fuel === name));
    } else {
      setFilteredData(cars);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div id="carcategorypage">
      <div>
        <h2>Choose a perfect car</h2>
        <div>
          <div>
            <h3>Filter By Brand</h3>
            <div>
              <p>
                <input
                  type="checkbox"
                  id="manual"
                  name="manual"
                  onChange={handleChecked}
                />
                <label htmlFor="manual">Manual</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="automatic"
                  onChange={handleChecked}
                />
                <label htmlFor="automatic">Automatic</label>
              </p>
            </div>
          </div>
          <div>
            <h3>Filter By Fuel</h3>
            <div>
              {" "}
              <p>
                <input type="checkbox" name="diesel" onChange={handleChecked} />
                <label htmlFor="diesel">Diesel</label>
              </p>
              <p>
                <input type="checkbox" name="petrol" onChange={handleChecked} />
                <label htmlFor="petrol">Petrol</label>
              </p>
              <p>
                <input type="checkbox" name="cng" onChange={handleChecked} />
                <label htmlFor="cng">CNG</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="electric"
                  onChange={handleChecked}
                />
                <label htmlFor="electric">Electric</label>
              </p>
              <p>
                <input type="checkbox" name="hybrid" onChange={handleChecked} />
                <label htmlFor="hybrid">Hybrid</label>
              </p>
            </div>
          </div>

          <div>
            <h3>Filter By Price</h3>
            <div>
              <p>
                <input
                  type="checkbox"
                  name="$100 - $200"
                  onChange={handleChecked}
                />
                <label htmlFor="$100 - $200"> $100 - $200</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="$150 - 250"
                  onChange={handleChecked}
                />
                <label htmlFor="$150 - 250"> $150 - 250</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="$200 - 300"
                  onChange={handleChecked}
                />
                <label htmlFor="$200 - 300"> $200 - 300</label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="categorised_car_container">
        {cars.map((car: string | number) => (
          <div key={car}>
            <div className="categorised_car_img_section">
              <img style={{ width: "100%", height: "100%" }} src={img} alt="" />
            </div>
            <div className="categorised_car_section_features">
              <p>{car.name}</p>
              <div className="categorised_car_car_features">
                <p>{car.seater} seater</p>
                <p>
                  <span className="material-symbols-outlined">
                    search_hands_free
                  </span>
                  {car.features}
                </p>
                <p>{car.perKm}kmph</p>
              </div>
              <p className="categorised_car_car_price">
                Starting from ${car.perDayRent}
              </p>
              <div>
                <p>Details</p>
                <p>Book Now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RootComponentOfCars;
