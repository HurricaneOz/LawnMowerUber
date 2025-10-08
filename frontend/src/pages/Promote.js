import React, { useEffect, useState } from "react";
import Bacckbutton from "../components/Backbutton";
import ProviderForm from "../components/ProviderForm";
import "./Promote.css";

export default function Promote() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(user);
  }, []);

  return (
    <div className="promote-page">
      <Bacckbutton />
      {currentUser && (
        <div className="promote-page__user">
          Signed in as: <strong>{currentUser}</strong>
        </div>
      )}
      <ProviderForm />
    </div>
  );
}