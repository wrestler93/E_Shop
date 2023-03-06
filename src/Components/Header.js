import React, { useEffect, useState } from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../actions/index";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const logout = (e) => {
    e.preventDefault();
    dispatch(Logout(false));
    window.localStorage.setItem("Valid", false);
    navigate("/");
  };

  const { Authenticate, itemTotal, ItemCount } = useSelector((state) => ({
    Authenticate: state.searchTheEmail.status,
    itemTotal: state.searchTheEmail.CartData,
    ItemCount: state.searchTheEmail.countNum,
  }));
  console.log(Authenticate);

  useEffect(() => {
    console.log(JSON.parse(window.localStorage.getItem("Valid")));
    const valid = JSON.parse(window.localStorage.getItem("Valid"));
    if (valid !== true) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    let totalCount = itemTotal.length;
    setItemCount(totalCount);
  }, [itemTotal]);

  return (
    <div className="header">
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <StorefrontIcon className="header_LOGO" fontSize="large" />
      </Link>
      <h2 className="header_LOGO_test">Let's Shop</h2>
      <div className="header_nav">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingCartIcon fontSize="large" />
            <span className="nav_item_line2 .nav__basketCount">
              {ItemCount}
            </span>
          </div>
        </Link>
        <div className="nav_item">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
