import Navbar from "../components/Navbar";
import ServiceItem from "../components/ServiceItem";
import "./Services.css";


export default function Services() {
    const services = ["Lawn Care", "Snow Removal", "Landscaping", "Gutter Cleaning"];

    return (
        <div className = "services-page">
            <Navbar></Navbar>
            <div className = "services-box">
                {services.map((service, index) => (
                    <ServiceItem key={index} name={service} />
                ))}
            </div>
        </div>
    );
}