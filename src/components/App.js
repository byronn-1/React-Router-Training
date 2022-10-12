import { Routes, Route } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

import Home from "./Home";
import Categories from "./Categories";

//The hello path from this route can be viewed by changing the URL to http://localhost:3000/hello
//The default / path will render the home component
// notice you can also pass props down to the child components through the routed component
function App() {
  return (
    <div className="app">
      <header className="container">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </header>
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 tech"/>} />
        <Route path="/hello" element={<h1>Hello, from my router.</h1>} />
        <Route path="/categories" element={<Categories /> } />

      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
