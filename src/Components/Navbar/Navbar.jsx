import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-shopping-bag.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SuperEcoShop</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("uomo");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/uomo">
            Uomo
          </Link>
          {menu === "uomo" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("donna");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="donna">
            Donna
          </Link>
          {menu === "donna" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bambino");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/bambino">
            Bambino
          </Link>
          {menu === "bambino" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>ACCEDI</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
