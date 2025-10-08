import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileMenu from './ProfileMenu';

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);

  //get from backend later
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) setCurrentUser(storedUser);
  }, []);

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

        {/* Show login if not logged in */}
        {!currentUser && (
          <li>
            <Link to="/Login">Login</Link>
          </li>
        )}

        {/* Show profile menu if logged in */}
        {currentUser && (
          <li className = "navbar-profile-menu">
            <ProfileMenu />
          </li>
        )}
      </ul>
    </nav>
  );
}
