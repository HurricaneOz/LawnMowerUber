import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  const navItems = [
    { path: "/Services", label: "Services" },
    { path: "/Promote", label: "Promote" },
    { path: "/About", label: "About" },
    { path: "/Contact", label: "Contact" },
    { path: "/Login", label: "Login" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/Home">HSF</Link>
      </div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}