import { useParams } from "react-router-dom";

import { getCategory } from "../api";

// Here we import the react-router-dom hook useParams
// We destructure the variable catId from the useParams hook- this comes from the path property on the Route tag in app.js
// Then we can pull data from api.js using the category variable
export default function Category() {

  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <h2>{category.name} Sessions</h2>
      
      <ul className="session-list">
        {category?.sessions.map(session => (
          <li className="session" key={session.id}>
            <p className="session-name">{session.name}</p>
            <p>
              {session.speaker.name} | {session.speaker.org}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
