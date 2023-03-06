import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchEmail } from "../actions/index";
import { useNavigate } from "react-router-dom";
// import StorefrontIcon from "@material-ui/icons/Storefront";
// import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Status, setStatus] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(searchEmail(email, password));
    // if (Authenticate == false) {
    //   alert("INCORRECT CREDENTIALS");
    // }
  };

  const { Authenticate } = useSelector((state) => ({
    Authenticate: state.searchTheEmail.status,
  }));
  console.log(Authenticate);

  useEffect(() => {
    if (Authenticate == true) {
      window.localStorage.setItem("Valid", true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
    // return () => {
    //   setStatus(false);
    // };
  }, [Authenticate]);

  return (
    <div className="login">
      <div className="login__logo">
        <h2 className="login__logoTitle">Let's SHOP</h2>
      </div>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("email", e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log("pass", e.target.value);
            }}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
