import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { CarPropTypes, InitialStatePropTypes } from "../constant/interfaces";

// import styling
import "../styles/carcategorypage.css";
import Footer from "../homepage/Footer";

const RootComponentOfCars = ({ category }: { category: string }) => {
  // called the fetch custom hook and pass the category
  useFetch("http://localhost:3000/cars", category);

  // get the data from the redux store
  const { isLoading, isError, cars } = useSelector(
    (state: InitialStatePropTypes) => state.cars
  );

  // filter the data
  const [filteredData, setFilteredData] = useState<CarPropTypes[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    transmission: [],
    fuel: [],
    bookingAmount: [],
  });

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, dataset } = e.target;
    const category = dataset.category as keyof typeof selectedFilters;

    setSelectedFilters((prevFilters) => {
      const updatedCategory = checked
        ? [...prevFilters[category], name]
        : prevFilters[category].filter((item) => item !== name);

      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  useEffect(() => {
    let filteredCars = [...cars];

    if (selectedFilters.transmission.length > 0) {
      filteredCars = filteredCars.filter((car: CarPropTypes) =>
        selectedFilters.transmission.includes(car.transmission.toLowerCase())
      );
    }

    if (selectedFilters.fuel.length > 0) {
      filteredCars = filteredCars.filter((car: CarPropTypes) =>
        selectedFilters.fuel.includes(car.fuel.toLowerCase())
      );
    }

    if (selectedFilters.bookingAmount.length > 0) {
      filteredCars = filteredCars.filter((car: CarPropTypes) => {
        return selectedFilters.bookingAmount.some((booking: string) => {
          const [minAmount, maxAmount] = booking.split("-").map(Number);

          return (
            car.bookingAmount >= minAmount && car.bookingAmount <= maxAmount
          );
        });
      });
    }

    setFilteredData(filteredCars);
  }, [selectedFilters, cars]);

  useEffect(() => {
    setFilteredData(cars);
  }, [cars]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      {" "}
      <div id="carcategorypage">
        <div id="categorised_car_filter_container">
          <h2>Choose a perfect car</h2>
          <div id="categorised_car_filter">
            <div>
              <h3>Filter By Transmission</h3>
              <div>
                <p>
                  <input
                    type="checkbox"
                    id="manual"
                    data-category="transmission"
                    name="manual"
                    onChange={handleChecked}
                  />
                  <label htmlFor="manual">Manual</label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="automatic"
                    data-category="transmission"
                    onChange={handleChecked}
                  />
                  <label htmlFor="automatic">Automatic</label>
                </p>
              </div>
            </div>
            <div>
              <h3>Filter By Fuel</h3>
              <div>
                <p>
                  <input
                    type="checkbox"
                    name="diesel"
                    data-category="fuel"
                    onChange={handleChecked}
                  />
                  <label htmlFor="diesel">Diesel</label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="petrol"
                    data-category="fuel"
                    onChange={handleChecked}
                  />
                  <label htmlFor="petrol">Petrol</label>
                </p>
              </div>
            </div>

            <div>
              <h3>Filter By Price</h3>
              <div>
                <p>
                  <input
                    type="checkbox"
                    name="50-100"
                    data-category="bookingAmount"
                    onChange={handleChecked}
                  />
                  <label htmlFor="50-200">$50 - $200</label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="100-150"
                    data-category="bookingAmount"
                    onChange={handleChecked}
                  />
                  <label htmlFor="200-250">$200 - $250</label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="150-300"
                    data-category="bookingAmount"
                    onChange={handleChecked}
                  />
                  <label htmlFor="250-300">$250 - $300</label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="categorised_car_container">
          {filteredData.map((car) => (
            <div key={car._id}>
              <div className="categorised_car_img_section">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={car.image}
                  alt=""
                />
              </div>
              <div className="categorised_car_section_features">
                <p>{car.name}</p>
                <div className="categorised_car_car_features">
                  <p>{car.seater} seater</p>
                  <p>
                    <span className="material-symbols-outlined">
                      search_hands_free
                    </span>
                    {car.transmission}
                  </p>
                  <p>{car.mileage}kmph</p>
                </div>
                <p className="categorised_car_car_price">
                  Starting from ${car.bookingAmount}
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

      <Footer/>
    </>
  );
};

export default RootComponentOfCars;
