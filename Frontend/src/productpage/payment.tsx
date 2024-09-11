import {} from "react";

const payment = () => {
  return (
    <>
      <form>
        <h1>Payment</h1>
        <div>
          <div id="payment_method">
            <div>
              <input type="radio" id="upi" name="payment" />
              <label htmlFor="upi">UPI</label>
            </div>
            <div>
              <input type="radio" id="card" name="payment" />
              <label htmlFor="card">Card</label>
            </div>
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div>
            <div>
              <label htmlFor="card_number">Card Number</label>
              <input
                type="text"
                maxLength={19}
                placeholder="1234-1234-1234-1234"
              />
            </div>
            <div>
              <label htmlFor="expiry">Expiry</label>
              <input type="text" maxLength={5} placeholder="MM/YY" />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input type="text" maxLength={3} placeholder="123" />
            </div>
          </div>
          <div>
            <label htmlFor="otp">OTP</label>
            <input type="text" maxLength={6} placeholder="123456" />
          </div>

          <button type="submit">Pay</button>
        </div>
      </form>

      <form action="">
        <h1>Personal Details</h1>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>

          <div>
            <h2>Address</h2>
            <div>
              <label htmlFor="House No. / Flat No.">House / Flat No: </label>
              <input type="text" id="House No. / Flat No."></input>
            </div>
            <div>
              <label htmlFor="Street">Street/ Landmark</label>
              <input type="text" id="Street"></input>
            </div>

            <div>
              <label htmlFor="City">City / Town</label>
              <input type="text" id="City"></input>
            </div>

            <div>
              <label htmlFor="State">State</label>
              <input type="text" id="State"></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default payment;
