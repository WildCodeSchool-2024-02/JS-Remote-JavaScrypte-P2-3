import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function RoomCard({ image, name, id }) {
  return (
    <div className="test-2">
      <NavLink to={`/art/${id}`}>
        <p className="name-2">{name}</p>
        <img src={image} alt="Oeuvre d'art" className="imgArt" />
      </NavLink>
    </div>
  );
}

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RoomCard;
