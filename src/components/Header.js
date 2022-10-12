import { NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

//Instead of inline JSX here we call a variable with the ternary operator assigned to it

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
        <NavLink>
          <img
            className="logo"
            src={logo}
            alt="Red30 Tech logo"
            title="Red30 Tech | Home"
          />
        </NavLink>
        <nav>
          <NavLink to="home" className={getClass}>Home</NavLink>
          <NavLink to="categories" className={getClass}>Categories</NavLink>
          <NavLink to="about" className={getClass}>About</NavLink>
        </nav>
      
    </header>
  );
}
