import { useParams } from "react-router-dom";

export default function ServiceDetail() {
  const { serviceName } = useParams();

  return (
    <div className="service-detail">
      <h1>{serviceName.replace(/-/g, " ")}</h1>
      <p>
        This is the detail page for <strong>{serviceName.replace(/-/g, " ")}</strong>.
        You can load more info about this service here (e.g., description, images, etc).
      </p>
    </div>
  );
}
