import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Services.css";
import Box from "../components/Box";

export default function Services() {
  const services = {
    "winter": ["Snow Removal", "Ice Management", "Hockey", "Snowshoeing","Snow Removal", "Ice Management", "Hockey", "Snowshoeing"],
    "summer": ["Lawn Care", "Landscaping"],
    "cool": ["Snow Removal", "Ice Management", "Hockey", "Snowshoeing"],
    "power": ["Lawn Care", "Landscaping"],
    "super": ["Snow Removal", "Ice Management", "Hockey", "Snowshoeing"],
    "dooper": ["Lawn Care", "Landscaping"]
  };

  return (
    <div className="services-page">
      <Navbar />
      <div className="boxes-section">
        <div className="boxes-container">
          {Object.keys(services).map((categoryKey) => (
            <Box key={categoryKey} color="#ffffffff">
              <h2>{categoryKey}</h2>
              <ul>
                {services[categoryKey].map((service, index) => (
                  <li key={index}>
                    <Link
                      to={`/service/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="service-link"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
}
