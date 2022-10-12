import { Routes, Route} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import About from "./About";
import Category from "./Category";


// Here we nested the Category component into the Categories component route
//In Categories.js we can see that the Outlet component shows where to render the Category Component

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 tech" />} />
        <Route path="categories" element={<Categories />}>
          <Route path="category" element={<Category />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
