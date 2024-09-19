import { useDispatch, useSelector } from "react-redux";
import { useWishlist } from "../hooks/useWishlist";
import { useFetch } from "../hooks/useFetch";
import { RootState } from "../utils/store";

import "../styles/wishlist.css";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import axios from "axios";
import { setWishlist } from "../reducers/wishlistReducer";

const Wishlist = () => {
  useFetch("http://localhost:3000/cars", "");
  useWishlist();

  const { isLoading, isError, wishlist } = useSelector(
    (state: RootState) => state.wishlist
  );
  const dispatch = useDispatch();

  const handleSaveLater = useCallback(
    async (id: string): Promise<void> => {
      try {
        const res = await axios.delete("http://localhost:3000/savelater", {
          data: { id },
        });
        if (res.status === 200) {
          const data = wishlist.filter((car) => car._id !== id);
          dispatch(setWishlist(data));
        }
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch, wishlist]
  );

  // console.log(wishlist)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div id="wishlist">
      <h1>Wishlist</h1>
      <div id="wishlist_container">
        { wishlist.length > 0 ? wishlist.map((car) => (
          <div className="car" key={car._id}>
            <div>
              <img
                style={{ width: "100%", height: "100%", aspectRatio: "3 / 2" }}
                src={car.image}
                alt=""
              />
            </div>
            <div>
              <p>{car.name}</p>
              <p>
                ${car.bookingAmount} /{" "}
                <span style={{ fontSize: "1.2rem" }}> 12 hours</span>
              </p>
            </div>

            <button
              className="wishlist_btn"
              onClick={() => handleSaveLater(car._id)}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        )) : <div className="no_wishlist"><FontAwesomeIcon icon={faXmark} /></div> }
      </div>
    </div>
  );
};

export default Wishlist;
