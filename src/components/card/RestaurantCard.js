import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props?.data;

  return (
    <div
      data-testid="resCard"
      className="restro-card m-4 p-2 w-[250px] h-[450px] bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-md w-60 h-60"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="restro-img"
        height={200}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

// Higher Order Component
// Input - Restaurant Card => Restaurant Card Open or Close
export const withOpenCloseLabel = (RestaurantCard) => {
  // It will return another component with extra label for restaurant is open or close.
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white px-2 py-1 m-1 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
