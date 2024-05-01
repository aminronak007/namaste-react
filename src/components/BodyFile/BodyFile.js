import React, { useEffect, useState } from "react";
import RestaurantCard from "../card/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import { RESTAURANT_SWIGGY_API } from "../../utils/constants";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const BodyFile = () => {
  const [reslists, setResLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();

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
      const data = await fetch(RESTAURANT_SWIGGY_API);
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

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection.
      </h1>
    );

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
