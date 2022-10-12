import { Link } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

// In the link component the prop "to"
// the prop "to" specifies a path to navigate the user to when it is clicked
//Note: it is rendered as an a tag to the DOM

export default function Header() {

  return (
    <header className="container">
        <Link>
          <img
            className="logo"
            src={logo}
            alt="Red30 Tech logo"
            title="Red30 Tech | Home"
          />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </nav>
      
    </header>
  );
}
