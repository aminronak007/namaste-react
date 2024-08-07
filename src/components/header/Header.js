import React, { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);

  const handleSubmit = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <Link to="/">
          <img className="w-40" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-1">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home 🏠</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us 🅰</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us 📞</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery ✨</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
          </li>

          <li className="px-4">
            <button onClick={handleSubmit} className="login-btn">
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">
            {btnName === "Logout" && data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
