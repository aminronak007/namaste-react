import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // let btnName = "Login";

  const handleSubmit = () => {
    // btnName = "Logout";
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button onClick={handleSubmit} className="login-btn">
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
