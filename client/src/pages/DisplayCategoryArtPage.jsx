import { useLoaderData, NavLink } from "react-router-dom";

export default function DisplayCategoryArtPage() {
  const displayData = useLoaderData();
  const { name, description, image, category } = displayData;

  return (
    <div>
      <NavLink to={`/filter/${category}`}>Back</NavLink>

      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}
