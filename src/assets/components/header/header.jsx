import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <h1> welcome to my website</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;
