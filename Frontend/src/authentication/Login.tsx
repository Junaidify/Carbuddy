import {} from "react";

// import Styling
import "../styles/authentication.css";

const Login = () => {
  return (
    <>
      <div id="login_signup_wrapper">
        <div id="login_signup">
          <div id="signUp">
            <h1>Sign Up</h1>
            <div>
              <div>
                <input type="text" id="name" required />
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input type="email" id="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" id="phone" required />
                <label htmlFor="phone">Phone</label>
              </div>
              <div>
                <input type="password" id="password" required />
                <label htmlFor="password">Password</label>
              </div>

              <button>Sign Up</button>
            </div>
          </div>

          <div id="login">
            <h1>Login</h1>
            <div>
              <div>
                <input type="text" id="user_email" required />
                <label htmlFor="user_email">Email / Phone</label>
              </div>

              <div>
                <input type="password" id="user_password" required />
                <label htmlFor="user_password">Password</label>
              </div>

              <div>
                <button>Sign Up</button>
                <button>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
