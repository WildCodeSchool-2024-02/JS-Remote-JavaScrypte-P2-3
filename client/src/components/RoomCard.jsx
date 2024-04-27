import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function RoomCard({ image, name, id }) {
  return (
    <div className="imgArtAll">
      <NavLink to={`/art/${id}`}>
        <p>{name}</p>
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
