import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.css";

export default function ProfileMenu() {
  const [currentUser, setCurrentUser] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(user);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
    navigate("/Home");
  };

  if (!currentUser) return <a href="/Login">Login</a>;

  return (
    <div className="profile-menu" ref={menuRef}>
      <button
        className="profile-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        👤{/*Use profile picture later on*/}
      </button>

      {menuOpen && (
        <div className="dropdown">
          <p className="dropdown-user">Signed in as <b>{currentUser}</b></p>
          <hr />
          <button
            onClick={() => navigate("/Promote")}
            className="dropdown-item"
          >
            My Profile
          </button>
          <button
            onClick={handleLogout}
            className="dropdown-item logout"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
