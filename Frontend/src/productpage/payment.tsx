// import styling
import "../styles/payment.css";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { ProductPropTypes } from "../constant/interfaces";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const Payment = () => {
  const { id } = useParams();
  const saveCar = useProduct(id as string);
  const [payment, setPayment] = useState<ProductPropTypes>({
    name: "",
    email: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    pincode: "",
    state: "",
    customer_name: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
  });
  const [res, setRes] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const phoneReg = /^\d{10}$/;
      const cardReg = /^\d{16}$/;
      const cvvReg = /^\d{3}$/;
      const pincodeReg = /^\d{6}$/;
      const expiryReg = /^\d{2}\/\d{2}$/;

      if (payment.name.trim() == "") {
        return alert("Name cannot be empty");
      }

      if (
        payment.email.trim() == "" ||
        payment.email.includes("/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/")
      )
        return alert("Invalid Email");

      if (payment.phone.trim() == "" || !payment.phone.match(phoneReg))
        return alert("Invalid Phone Number");

      if (payment.house.trim() == "") return alert("Invalid House Number");
      if (payment.street.trim() == "") return alert("Invalid Street Name");
      if (payment.city.trim() == "") return alert("City cannot be empty");
      if (payment.pincode.trim() == "" || !payment.pincode.match(pincodeReg))
        return alert("Pincode cannot be empty");
      if (payment.state.trim() == "") return alert("State cannot be empty");
      if (payment.customer_name.trim() == "")
        return alert("Customer name cannot be empty");

      if (
        payment.card_number.trim() == "" ||
        !payment.card_number.match(cardReg)
      )
        return alert("Card number cannot be empty");

      if (
        payment.expiry_date.trim() == "" ||
        !payment.expiry_date.match(expiryReg)
      )
        return alert("Expiry date cannot be empty");

      if (payment.cvv.trim() == "" || !payment.cvv.match(cvvReg))
        return alert("CVV cannot be empty");

      try {
        const res = await axios.post("http://localhost:3000/payment", payment);
        if (res.status === 201) {
          setRes(true);
          setPayment({
            name: "",
            email: "",
            phone: "",
            house: "",
            street: "",
            city: "",
            pincode: "",
            state: "",
            customer_name: "",
            card_number: "",
            expiry_date: "",
            cvv: "",
          });
        } else {
          console.log("Invalid request in PaymentPage");
        }
      } catch (err) {
        console.log("Error in PaymentPage", err);
      }
    },
    [payment]
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setPayment((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (res) {
      const clickOut = document.querySelector(".payment_modal");
      const handleClick = (e: MouseEvent) => {
        if (clickOut && !clickOut.contains(e.target as Node)) {
          setRes(false);
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [res]);

  console.log(saveCar);

  return (
    <>
      <section id="payment_section">
        <form action="">
          <h1>Personal Details</h1>
          <div className="personal_details">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                placeholder="John Doe"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={payment.name}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="abc@example.com"
                type="email"
                id="email"
                name="email"
                value={payment.email}
                onChange={handleChange}
              />
            </div>

            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                placeholder="1234567890"
                type="text"
                id="phone"
                name="phone"
                maxLength={10}
                value={payment.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2>Address</h2>
          <div className="address">
            <div>
              <div className="house">
                <label htmlFor="House No. / Flat No.">House / Flat No: </label>
                <input
                  placeholder="123"
                  type="text"
                  id="House No. / Flat No."
                  name="house"
                  maxLength={4}
                  value={payment.house}
                  onChange={handleChange}
                />
              </div>
              <div className="street">
                <label htmlFor="Street">Street/ Landmark</label>
                <input
                  placeholder="Street"
                  type="text"
                  id="Street"
                  name="street"
                  value={payment.street}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="city">
                <label htmlFor="City">City / Town</label>
                <input
                  placeholder="City"
                  type="text"
                  id="City"
                  name="city"
                  value={payment.city}
                  onChange={handleChange}
                />
              </div>

              <div className="pincode">
                <label htmlFor="Pincode">Pincode</label>
                <input
                  placeholder="Pincode"
                  type="text"
                  id="Pincode"
                  name="pincode"
                  maxLength={6}
                  value={payment.pincode}
                  onChange={handleChange}
                />
              </div>

              <div className="state">
                <label htmlFor="State">State</label>
                <select
                  name="state"
                  id="State"
                  value={payment.state}
                  onChange={handleChange}
                >
                  <option value="select">
                    ---------- Select your city ----------
                  </option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="chandigarh">Chandigarh</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <form>
          <h1>Payment</h1>
          <div id="payment_gateway">
            <div className="payment_method">
              <div>
                <input type="radio" id="upi" name="payment" />
                <label htmlFor="upi">UPI</label>
              </div>
              <div>
                <input type="radio" id="card" name="payment" />
                <label htmlFor="card">Card</label>
              </div>
            </div>
            <div className="customer_name">
              <label htmlFor="customer_name">Customer Name</label>
              <input
                placeholder="John Doe"
                type="text"
                id="customer_name"
                name="customer_name"
                onChange={handleChange}
              />
            </div>

            <h2>Card Details</h2>
            <div id="card_details">
              <div className="card_number">
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  placeholder="1234-1234-1234-1234"
                  id="card_number"
                  name="card_number"
                  onChange={handleChange}
                />
              </div>
              <div className="card_expiry_cvv">
                <div>
                  <label htmlFor="expiry">Expiry</label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="MM/YY"
                    id="expiry"
                    name="expiry_date"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    maxLength={3}
                    placeholder="123"
                    id="cvv"
                    name="cvv"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div id="total_amount">
              <label htmlFor="otp">Total Amount:</label>
              <p> ${saveCar?.bookingAmount}</p>
            </div>

            <button onClick={handleSubmit}>Pay Now</button>
          </div>
        </form>

        {res && (
          <div className="payment_modal">
            <p>Order Place</p>
          </div>
        )}
      </section>
    </>
  );
};

