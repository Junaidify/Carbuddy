import { useState } from "react";
import "../styles/authentication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [loginPasswordShown, setLoginPasswordShown] = useState<boolean>(false);
  const [signUpPasswordShown, setSignUpPasswordShown] =
    useState<boolean>(false);
  const rotateDegree = login ? "10deg" : "205deg";

  const gradientStyle = {
    background: `conic-gradient(from ${rotateDegree} at 50% 0, var(--primary-color) 0%, var(--primary-color) 40%, white 40%, white 70%)`,
    transition: "background 1s ease-in-out",
  };

  return (
    <>
      <div id="login_signup_wrapper">
        <div id="login_signup" style={gradientStyle}>
          <div id="signUp" style={{ visibility: login ? "visible" : "hidden" }}>
            <h1>Welcome User !</h1>
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
                <input
                  type={signUpPasswordShown ? "text" : "password"}
                  id="password"
                  required
                />
                <button onClick={() => setSignUpPasswordShown((prev) => !prev)}>
                  {" "}
                  {signUpPasswordShown ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}{" "}
                </button>
                <label htmlFor="password">Password</label>
              </div>

              <div>
                <button onClick={() => setLogin(!login)}>Sign Up</button>
                <div>
                  Account already exist{" "}
                  <button onClick={() => setLogin(!login)}>Login</button>
                </div>
              </div>
            </div>
          </div>

          <div id="login" style={{ visibility: login ? "hidden" : "visible" }}>
            <h1>Welcome Back !</h1>
            <div>
              <div>
                <input type="text" id="user_email" required />
                <label htmlFor="user_email">Email / Phone</label>
              </div>

              <div>
                <input
                  type={loginPasswordShown ? "text" : "password"}
                  id="user_password"
                  required
                />
                <button onClick={() => setLoginPasswordShown((prev) => !prev)}>
                  {" "}
                  {loginPasswordShown ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}{" "}
                </button>
                <label htmlFor="user_password">Password</label>
              </div>

              <div>
                <button>Login</button>
                <div>
                  Account doesn't exist{" "}
                  <button onClick={() => setLogin(!login)}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          <div id="image"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
