import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="lg:px-36 px-4 pt-24">
      <div className="text-center w-1/2 mx-auto">
        <h3 className="text-main font-semibold">Services</h3>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="lg:grid grid-cols-4 gap-8 py-10">
        {services.map((service) => (
          <div key={service._id} className="card border border-main">
            <figure>
              <img src={service.img} alt="" className="h-52 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{service.title}</h3>
              <div className="text-main font-semibold flex justify-between">
                <p>Price: {service.price}</p>
                <FaAngleRight className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className=" btn text-white border-0 bg-main normal-case font-semibold shadow-md hover:bg-red-500 mr-4">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
