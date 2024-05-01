import React, { useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../custom-hooks/useRestaurantMenu";
// import { MENU_URL } from "../../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);
  const id = resId.match(/\d+/g).join("");

  const resInfo = useRestaurantMenu(id);

  // const fetchMenu = async () => {
  //   try {
  //     let url = MENU_URL(id);
  //     const data = await fetch(url);
  //     const json = await data.json();
  //     // Optional Chaining
  //     setResInfo(json?.data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  useEffect(() => {
    // fetchMenu();
    const timer = setInterval(() => {
      console.log("React");
    }, 1000);

    // Unmounting Phase
    return () => {
      clearInterval(timer);
    };
    // Unmounting Phase
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => {
          const { id, name, price, defaultPrice } = item?.card?.info;
          return (
            <li key={id}>
              {name} - Rs.{(price || defaultPrice) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
