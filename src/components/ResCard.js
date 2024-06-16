import { IMG_CDN_URL } from '../utils/constants';
const ResCard = ({
  name,
  cuisines,
  avgRating,
  costForTwo,
  cloudinaryImageId,
  sla,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default ResCard;
