import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const myData = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grape' },
  ];

  return (
    <div className="home-container">
      <Navbar></Navbar>
      <div className = "home-content">
        <h1>Book Service For Any <br></br>of Your Needs</h1>
        <SearchBar data={myData}></SearchBar>
      </div>
    </div>
      
  );
}
