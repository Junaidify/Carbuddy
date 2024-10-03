import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { CarPropTypes } from "../constant/interfaces";
import logo from "../images/carousel_4.jpg";
import "../styles/carcategorypage.css";
import Footer from "../homepage/Footer";
import { useNavigate } from "react-router-dom";
import { RootState } from "../utils/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "./Skeleton";

const RootComponentOfCars = ({ category }: { category: string }) => {
  useFetch("https://rent-wheels-1.onrender.com/cars", category);
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1025) {
      setOpenFilters(true);
    }
  }, [windowWidth]);

  const { isLoading, isError, cars } = useSelector(
    (state: RootState) => state.cars
  );

  const [filteredData, setFilteredData] = useState<CarPropTypes[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({
    fuel: [] as string[],
    transmission: [] as string[],
    brand: [] as string[],
    bookingAmount: [] as [number, number][],
  });

  const handleChecked = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, checked, dataset } = e.target as HTMLInputElement;
    const category = dataset.category as keyof typeof selectedFilters;

    setSelectedFilters((prevFilters) => {
      let updatedCategory = prevFilters[category];

      if (category === "bookingAmount") {
        const [min, max] = name.split("-").map(Number) as [number, number];
        updatedCategory = checked
          ? [...(prevFilters[category] as [number, number][]), [min, max]]
          : (prevFilters[category] as [number, number][]).filter(
              (range) => range[0] !== min && range[1] !== max
            );
      } else {
        updatedCategory = checked
          ? [...prevFilters[category], name]
          : prevFilters[category].filter((item: string) => item !== name);
      }

      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  useEffect(() => {
    let filteredCars = [...cars];

    if (selectedFilters.fuel.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        selectedFilters.fuel.includes(car.fuel.toLowerCase())
      );
    }

    if (selectedFilters.bookingAmount.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        selectedFilters.bookingAmount.some(
          ([min, max]) => car.bookingAmount >= min && car.bookingAmount <= max
        )
      );
    }

    if (selectedFilters.brand.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        selectedFilters.brand.includes(car.brand.toLowerCase())
      );
    }

    if (selectedFilters.transmission.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        selectedFilters.transmission.includes(car.transmission.toLowerCase())
      );
    }

    setFilteredData(filteredCars);
  }, [selectedFilters, cars]);

  useEffect(() => {
    setFilteredData(cars);
  }, [cars]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(filteredData);

  return (
    <>
      <div id="car_category_container">
        <div
          className="filter_box"
          style={{ display: windowWidth < 1025 ? "block" : "none" }}
        >
          {openFilters ? (
            <button onClick={() => setOpenFilters(false)} className="close">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          ) : (
            <button onClick={() => setOpenFilters(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>

        <div
          style={{ display: openFilters ? "block" : "none" }}
          id="car_filter"
        >
          <h2> Filter By</h2>
          <div id="car_filter_content">
            <div className="car_filter_content_box">
              <h3>Fuel</h3>
              <div className="car_filter_checkbox">
                <div>
                  <input
                    type="checkbox"
                    name="diesel"
                    data-category="fuel"
                    onChange={handleChecked}
                  />
                  <label htmlFor="diesel">Diesel</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="petrol"
                    data-category="fuel"
                    onChange={handleChecked}
                  />
                  <label htmlFor="petrol">Petrol</label>
                </div>
              </div>
            </div>

            <div className="car_filter_content_box">
              <h3>Transmission</h3>
              <div className="car_filter_checkbox">
                <div>
                  <input
                    type="checkbox"
                    id="manual"
                    data-category="transmission"
                    name="manual"
                    onChange={handleChecked}
                  />
                  <label htmlFor="manual">Manual</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="automatic"
                    data-category="transmission"
                    onChange={handleChecked}
                  />
                  <label htmlFor="automatic">Automatic</label>
                </div>
              </div>
            </div>

            <div className="car_filter_content_box">
              <h3>Brand</h3>
              <div className="car_filter_checkbox">
                <div>
                  <input
                    type="checkbox"
                    name="toyota"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="toyota">Toyota</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="bmw"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="bmw"> BMW</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="nissan"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="nissan"> Nissan</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="hyundai"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="hyundai"> Hyundai</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="kia"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="kia"> Kia</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="mercedes"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="mercedes"> Mercedes</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="hyundai"
                    data-category="brand"
                    onChange={handleChecked}
                  />
                  <label htmlFor="hyundai"> Hyundai</label>
                </div>
              </div>
            </div>

            <div className="car_filter_content_box">
              <h3>Price</h3>
              <div className="car_filter_checkbox">
                <div>
                  <input
                    type="checkbox"
                    name="50-100"
                    data-category="bookingAmount"
                    onChange={handleChecked}
                  />
                  <label htmlFor="50-200">$50 - $200</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="100-150"
                    data-category="bookingAmount"
                    onChange={handleChecked}
                  />
                  <label htmlFor="200-250">$200 - $250</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="150-300"
                    data-category="bookingAmount"
                    onChange={handleChecked}
                  />
                  <label htmlFor="250-300">$250 - $300</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="car_category">
          {filteredData.length !== 0 ? (
            filteredData.map((car) => (
              <div key={car._id} className="single_car">
                <div className="car_category_img">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={logo}
                    alt=""
                  />
                </div>

                <div className="car_category_content">
                  <h3>{car.name}</h3>
                  <h2>
                    <span>Starting from </span>${car.bookingAmount}
                  </h2>
                </div>

                <div className="car_category_button">
                  <button onClick={() => navigate(`/${category}/${car._id}`)}>
                    Details
                  </button>
                  <button onClick={() => navigate(`/booking/${car._id}`)}>
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootComponentOfCars;
