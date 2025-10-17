import React, { useContext } from "react";
import Backbutton from "../components/Backbutton";
import ProviderForm from "../components/ProviderForm";
import "./Promote.css";
import ProfileMenu from "../components/ProfileMenu";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

export default function Promote() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  return (
    <div className="promote-page">
      <div className="promote-page__header">
        <Backbutton />
        {currentUser && (
          <div className="promote-page__user">
            <ProfileMenu />
          </div>
        )}
        {!currentUser && (
          <button className = "login_button" onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>
      <ProviderForm />
    </div>
  );
}
