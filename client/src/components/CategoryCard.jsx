import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function CategoryCard({ name, image, id }) {
  return (
    <div>
      <NavLink to={`/art/${id}`}>
        <h3>{name}</h3>
        <img src={image} alt="" className="imgFilterRoom" />
      </NavLink>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
