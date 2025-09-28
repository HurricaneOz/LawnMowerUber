import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="button-group">
        <button
          type="button"
          className="service-button"
          onClick={() => navigate("/Promote")}
        >
          Promote Service
        </button>
        <button
          type="button"
          className="service-button"
          onClick={() => navigate("/Hire")}
        >
          Hire Service
        </button>
      </div>
    </div>
  );
}
