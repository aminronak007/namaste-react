import React, { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const id = resId?.match(/\d+/g).join("");
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* Categories Accordians */}
      {categories.map((category, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
