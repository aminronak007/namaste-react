import { CDN_URL } from "../../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props?.data;

  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-img"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="restro-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
