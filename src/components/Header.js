import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <div className="container">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt="Udemy Logo"
        width="91"
        height="34"
      />
      <a href="" className="hide1">
        Catagories
      </a>
      <div className="search">
        <img
          src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-240.png"
          alt="search Logo"
          width="20"
          height="34"
        />
        <input type="text" placeholder="Search for anything" />
      </div>
      <a href="" className="hide1">
        Udemy Business
      </a>
      <a href="" className="hide1">
        Teach on Udemy
      </a>
      <img
        className="hide2"
        src="https://cdn2.iconfinder.com/data/icons/neutro-essential/32/cart-256.png"
        alt="chart"
        width="20"
        height="34"
      ></img>
      <button className="login hide2">Log in</button>
      <button className="signup hide2">sign up</button>
      <img
        className="hide2 web-logo"
        src="https://cdn2.iconfinder.com/data/icons/online-shop-part-1-1/64/online_shop_ecommerce_shopping-31-256.png"
        alt="www"
        width="20"
        height="34"
      ></img>
    </div>
  );
}

export default Header;
