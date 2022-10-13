import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import About from "./About";
import Category from "./Category";
import Session from "./Session";

// here in the nested route for Category the index attribute will use the Outlet to render default text before a category is selected
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="home" element={<Home title="Welcome to Red30 tech" />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} >
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>} />
        </Route>
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
