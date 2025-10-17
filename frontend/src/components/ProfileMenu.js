import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.css";
import { UserContext } from "./UserContext";

export default function ProfileMenu() {
  const { currentUser, logout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  if (!currentUser) return null;

  return (
    <div className="profile-menu" ref={menuRef}>
      <button
        className="profile-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        👤
      </button>

      {menuOpen && (
        <div className="dropdown">
          <p className="dropdown-user">
            Signed in as <b>{currentUser}</b>
          </p>
          <hr />
          <button
            onClick={() => navigate("/promote")}
            className="dropdown-item"
          >
            My Profile
          </button>
          <button onClick={handleLogout} className="dropdown-item logout">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
