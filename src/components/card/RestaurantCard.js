import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { id, cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props?.data;

  return (
    <Link to={`/restaurants/${name.toLowerCase().split(" ").join("-")}-${id}`}>
      <div className="restro-card" style={styleCard}>
        <img
          className="restro-img"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="restro-img"
          height={200}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
