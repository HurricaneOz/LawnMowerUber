import './Navbar.css';
import { Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Navbar() {
  const { currentUser } = useContext(UserContext);

  const navItems = [
    { path: "/Services", label: "Services" },
    { path: "/Promote", label: "Promote" },
    { path: "/About", label: "About" },
    { path: "/Contact", label: "Contact" },
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

        {!currentUser && (
          <li>
            <Link to="/Login">Login</Link>
          </li>
        )}

        {currentUser && (
          <li className="navbar-profile-menu">
            <ProfileMenu />
          </li>
        )}
      </ul>
    </nav>
  );
}
