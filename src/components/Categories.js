import { Outlet } from "react-router-dom";
import { getCategories } from "../api";


//the Outlet component tells react where to render the nested content
export default function Categories() {
  const categories = getCategories();

  return (
    <div className="container">
      <h1>Session Categories</h1>

      <ul className="categories">
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
