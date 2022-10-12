import { Routes, Route, Link } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import About from "./About";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 tech" />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
