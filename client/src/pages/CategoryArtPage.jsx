import { useLoaderData, NavLink } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import "../components/Navbar.scss";

export default function CategoryArtPage() {
  const artData = useLoaderData();

  return (
    <>
      <div>
        <NavLink to="/" className="buttonBack">
          Back
        </NavLink>
      </div>
      <div className="">
        {artData?.map((a) => (
          <CategoryCard
            key={a.id}
            name={a.name}
            image={a.image}
            category={a.category}
            id={a.id}
          />
        ))}
      </div>
    </>
  );
}
