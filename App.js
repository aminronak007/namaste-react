import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restroName, cuisine } = props;
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
        alt="restro-img"
      />
      <h3>{restroName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/* Restaurant Card */}
        <RestaurantCard
          restroName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian."
        />
        <RestaurantCard restroName="KFC" cuisine="Burger, Fastfood" />
        <RestaurantCard restroName="Dominos" cuisine="Pizza" />
        <RestaurantCard restroName="Nylon" cuisine="Pavbhaji" />
        <RestaurantCard restroName="Rajasthani" cuisine="Panipuri, Bhel" />
        <RestaurantCard
          restroName="Kathiywadi"
          cuisine="Kadhi khichdi, Ringan Bharthu"
        />
        {/* Restaurant Card */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
