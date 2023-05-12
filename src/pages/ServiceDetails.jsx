import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className="pt-20">
      <h3>Service details {service.title}</h3>
    </div>
  );
};

export default ServiceDetails;
