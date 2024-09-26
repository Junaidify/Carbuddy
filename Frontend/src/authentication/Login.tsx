import { useCallback, useState } from "react";
import "../styles/authentication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { LoginPropTypes, RegisterPropTypes } from "../constant/interfaces";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<boolean>(false);
  const [loginPasswordShown, setLoginPasswordShown] = useState<boolean>(false);
  const [signUpPasswordShown, setSignUpPasswordShown] =
    useState<boolean>(false);
  const rotateDegree = login ? "10deg" : "205deg";
  const [loginPassword, setLoginPassword] = useState<LoginPropTypes>({
    user_email: "",
    user_password: "",
  });
  const [signUpPassword, setSignUpPassword] = useState<RegisterPropTypes>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const gradientStyle = {
    background: `conic-gradient(from ${rotateDegree} at 50% 0, var(--primary-color) 0%, var(--primary-color) 40%, white 40%, white 70%)`,
    transition: "background 1s ease-in-out",
  };

  const toggleSignUp = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const res = await axios.post(
          "http://localhost:3000/register",
          signUpPassword
        );
        if (res.status === 201) {
          navigate("/");
        }

        if(res.status === 200){
          alert("User already exists");
          setSignUpPassword({ name: "", email: "", phone: "", password: "" });
        }

      } catch (err: any) {
        console.error(err);
      }
    },
    [signUpPassword, navigate]
  );

  const toggleLogin = useCallback(async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        loginPassword
      );
      if (res.status === 200) {
        console.log(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log("Login failed", err);
    }
  }, [loginPassword]);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpPassword((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div id="login_signup_wrapper">
        <div id="login_signup" style={gradientStyle}>
          <div id="signUp" style={{ visibility: login ? "visible" : "hidden" }}>
            <h1>Welcome User !</h1>
            <div>
              <div>
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  onChange={handleSignUp}
                  value={signUpPassword.name}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  onChange={handleSignUp}
                  value={signUpPassword.email}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  required
                  name="phone"
                  onChange={handleSignUp}
                  value={signUpPassword.phone}
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <div>
                <input
                  type={signUpPasswordShown ? "text" : "password"}
                  id="password"
                  required
                  name="password"
                  onChange={handleSignUp}
                  value={signUpPassword.password}
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
                <button onClick={toggleSignUp}>Sign Up</button>
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
                <input
                  type="text"
                  id="user_email"
                  required
                  name="user_email"
                  onChange={handleLogin}
                />
                <label htmlFor="user_email">Email</label>
              </div>

              <div>
                <input
                  type={loginPasswordShown ? "text" : "password"}
                  id="user_password"
                  required
                  name="user_password"
                  onChange={handleLogin}
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
                <button onClick={toggleLogin}>Login</button>
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
