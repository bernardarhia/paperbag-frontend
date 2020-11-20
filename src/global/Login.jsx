import React, { useState, useContext, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import Header from "./Header";
import { isEmail } from "../functions/isEmail";
import User from "../Api/requests";
import ErrorText from "./ErrorText";
import {encryptData} from '../functions/cipher';
import Redirecting from "./Redirecting";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    emailError: "",
    password: "",
    requestError: "",
  });
  const [success, setSuccess] = useState(false)
  const handleLogin = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitUser = async (e) => {
    e.preventDefault();

    // validate user input
    if (!userData.email || !userData.password) {
      return setError({
        requestError: "please fill all fields",
      });
    }
    if (!isEmail(userData.email)) {
      return setError({ emailError: "Invalid email", requestError: "" });
    }

    try {
      
    const loginUser = await User.login(userData);

    if(loginUser.status === 200){
       await encryptData(loginUser.data)
      setSuccess(true)
      setTimeout(()=>{
        window.location.replace('/dashboard')
      },3000)
    }
    } catch (error) {
      setSuccess(false)
      console.log(error.response.data);
    }
   
  };

  // useEffect(() => {
  
 
  // }, []);

  return (
    <>
    {!success ? 
    <>
      <Header />
      <div className="login">
        <div className="heading">
          <p>
            Welcome !
            <span role="img" aria-label="Smile emoji">
              😊
            </span>
          </p>
        </div>
        <div className="para pb-3">
          <p>Hey, kindly fill the forms to sign in</p>
        </div>
        <form className="form" onSubmit={submitUser}>
          {error.requestError ? (
            <ErrorText message={error.requestError} />
          ) : null}
          <div className="input__control pb-1">
            <label className="label" htmlFor="email">
              {error.emailError ? (
                <ErrorText message={error.emailError} />
              ) : (
                "Your email"
              )}
            </label>
            <Input
              type="text"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={handleLogin}
              style={{
                border: error.emailError
                  ? "1px solid red"
                  : "1px solid #e0e7ed",
              }}
              onBlur={() => {
                if (!isEmail(userData.email)) {
                  return setError({ emailError: "Invalid email" });
                }
                return setError({});
              }}
            />
          </div>
          <div className="input__control pb-1">
            <label className="label" htmlFor="password">
              Your password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              onChange={handleLogin}
            />
          </div>

          <div className="button__control">
            <Button
              size="btn__mobile"
              color="btn__primary"
              styles="btn__rounded"
            >
              Login
            </Button>
          </div>
          <div className="forgot__password">
            <Link to="/forgot-password">
              Forgot password?
              <span role="img" aria-label="Forgot emoji">
                🤔
              </span>
            </Link>
          </div>
        </form>
      </div>
      </> : <Redirecting /> 
}
    </>
  );
};

export default Login;
