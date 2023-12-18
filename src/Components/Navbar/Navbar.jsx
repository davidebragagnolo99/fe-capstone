import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-shopping-bag.png";
import cart_icon from "../Assets/cart_icon.png";

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
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("uomo");
          }}
        >
          Uomo{menu === "uomo" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("donna");
          }}
        >
          Donna{menu === "donna" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bambino");
          }}
        >
          Bambino{menu === "bambino" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>LOGIN</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
