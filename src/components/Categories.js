import { getCategories } from "../api";


// here we destructure the getCategories file from the data ./api.js file
// then mp over it to create a list of categories
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
    </div>
  );
}
