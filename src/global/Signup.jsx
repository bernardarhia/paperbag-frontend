import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import Header from "./Header";

const Signup = () => {
  return (
    <>
    <Header />
    <div className="signup">
      <div className="heading">
        <p>Welcome !😊</p>
      </div>
      <div className="para pb-3">
        <p>Hey, kindly fill the forms to sign up</p>
      </div>
      <form className="form">
        <div className="input__control pb-1">
          <label className="label" htmlFor="email">
            Your email
          </label>
          <Input type="text" placeholder="Enter your email" id="email" />
        </div>
        <div className="input__control pb-1">
          <label className="label" htmlFor="email">
            Username
          </label>
          <Input type="text" placeholder="Enter your username" id="username" />
        </div>
        <div className="input__control pb-1">
          <label className="label" htmlFor="password">
            Your password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <div className="input__control pb-1">
          <label className="label" htmlFor="verify_password">
            Verify password
          </label>
          <Input
            type="password"
            placeholder="Verify your password"
            id="verify_password"
          />
        </div>

        <div className="button__control">
          <Button size="btn__mobile" color="btn__primary" styles="btn__rounded">
            Signup
          </Button>
        </div>
        <div className="forgot__password">
          <Link to="/forgot-password">Forgot password?🤔</Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
