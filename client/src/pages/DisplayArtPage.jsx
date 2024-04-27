import { useLoaderData, NavLink } from "react-router-dom";
import "../components/Navbar.scss";

export default function DisplayArtPage() {
  const displayData = useLoaderData();
  const { name, description, image } = displayData;

  return (
    <div>
      <NavLink to="/" className="buttonBack">
        Back
      </NavLink>

      <h1>{name}</h1>
      <img src={image} alt="" className="imgFilter" />
      <p>{description}</p>
    </div>
  );
}
