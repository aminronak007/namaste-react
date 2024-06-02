import React, { useEffect, useState } from "react";
import RestaurantCard, { withOpenCloseLabel } from "../card/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import { RESTAURANT_SWIGGY_API } from "../../utils/constants";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const BodyFile = () => {
  const [reslists, setResLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardOpened = withOpenCloseLabel(RestaurantCard);

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
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black px-4 py-2 rounded-sm"
            type="text"
            name="search"
            onChange={handleChange}
            placeholder="Search"
            value={search}
          />
          <button
            className="px-4 py-2 bg-gray-100 ml-1 rounded-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 items-center">
          <button
            className="px-4 py-2 bg-green-100 ml-1 rounded-sm"
            onClick={() => handleTopRatedClick()}
          >
            Top Rated Button
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Restaurant Card */}
        {reslists.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant?.info?.name
              .toLowerCase()
              .split(" ")
              .join("-")}-${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpened data={restaurant?.info} />
            ) : (
              <RestaurantCard data={restaurant?.info} />
            )}
          </Link>
        ))}
        {/* Restaurant Card */}
      </div>
    </div>
  );
};

export default BodyFile;
