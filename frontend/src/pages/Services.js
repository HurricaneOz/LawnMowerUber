import Navbar from "../components/Navbar";
import "./Services.css";


export default function Services() {
    const services = ["Lawn Care", "Snow Removal", "Landscaping"];

    return (
        <div className = "services-page">
            <Navbar></Navbar>
            <h1>Our Services</h1>
        </div>
    );
}