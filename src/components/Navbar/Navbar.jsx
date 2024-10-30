import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
}
