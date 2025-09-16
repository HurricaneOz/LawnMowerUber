import "./ServiceItem.css";

export default function ServiceItem({ name }) {

    const handleClick = () => {
        alert(`You selected the ${name} service.`);
    }

    return (
        <div className="service-item" onClick={() => handleClick()}>
            {name}
        </div>
    );
}