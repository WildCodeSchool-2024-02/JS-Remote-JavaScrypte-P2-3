import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Category.scss";

export default function CategoryCard({ name, image, id }) {
  return (
    <div className="category-filter-page">
      <NavLink className="nav-category" to={`/art/${id}`}>
        <h3 className="name-category-filter">{name}</h3>
        <img src={image} alt="" className="img-category-filter" />
      </NavLink>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
