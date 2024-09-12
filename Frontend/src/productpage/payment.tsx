import {} from "react";

// import styling
import "../styles/payment.css";

const payment = () => {
  return (
    <>
      <section id="payment_section">
        <form action="">
          <h1>Personal Details</h1>
          <div className="personal_details">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input placeholder="John Doe" type="text" id="name" />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input placeholder="abc@example.com" type="email" id="email" />
            </div>

            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input placeholder="1234567890" type="text" id="phone" />
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
                ></input>
              </div>
              <div className="street">
                <label htmlFor="Street">Street/ Landmark</label>
                <input placeholder="Street" type="text" id="Street"></input>
              </div>
            </div>
            <div>
              <div className="city">
                <label htmlFor="City">City / Town</label>
                <input placeholder="City" type="text" id="City"></input>
              </div>

              <div className="pincode">
                <label htmlFor="Pincode">Pincode</label>
                <input placeholder="Pincode" type="text" id="Pincode"></input>
              </div>

              <div className="state">
                <label htmlFor="State">State</label>
                <select name="State" id="State">
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
              <input placeholder="John Doe" type="text" id="customer_name" />
            </div>

            <h2>Card Details</h2>
            <div id="card_details">
              <div className="card_number">
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  placeholder="1234-1234-1234-1234"
                />
              </div>
              <div className="card_expiry_cvv">
                <div>
                  <label htmlFor="expiry">Expiry</label>
                  <input type="text" maxLength={5} placeholder="MM/YY" />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" maxLength={3} placeholder="123" />
                </div>
              </div>
            </div>
            <div id="card_otp">
              <label htmlFor="otp">OTP</label>
              <div>
                <input type="text" maxLength={1} placeholder="0" />
                <input type="text" maxLength={1} placeholder="0" />
                <input type="text" maxLength={1} placeholder="0" />
                <input type="text" maxLength={1} placeholder="0" />
                <input type="text" maxLength={1} placeholder="0" />
                <input type="text" maxLength={1} placeholder="0" />
              </div>
            </div>

            <button type="submit">Pay</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default payment;
