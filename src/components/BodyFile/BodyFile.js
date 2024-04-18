import React, { useEffect, useState } from "react";
import RestaurantCard from "../card/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";

const BodyFile = () => {
  const [reslists, setResLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const handleTopRatedClick = () => {
    setResLists(reslists.filter((res) => res.info.avgRating >= 4.4));
  };

  const handleChange = (e) => {
    if (e.target.value) {
      setSearch(e.target.value);
    } else {
      setSearch("");
      setResLists([]);
      fetchData();
    }
  };

  const handleSearch = () => {
    setLoading(true);
    if (search) {
      setResLists(
        reslists.filter((res) =>
          res.info.name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
      );
      const json = await data.json();

      // Optional Chaining
      setResLists(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setLoading(false);

      // setResLists(json)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Conditional Rendering
  // if (reslists?.length === 0) {
  //   return <Shimmer />;
  // }

  console.log("Body Rendered");

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            placeholder="Search"
            value={search}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => handleTopRatedClick()}>
          Top Rated Button
        </button>
      </div>
      <div className="restro-container">
        {/* Restaurant Card */}
        {reslists.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} data={restaurant?.info} />
        ))}
        {/* Restaurant Card */}
      </div>
    </div>
  );
};

export default BodyFile;
