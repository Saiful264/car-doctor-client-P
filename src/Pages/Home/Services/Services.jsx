import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  // const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data =>  {
      setServices(data)})
  }, []);
  
  // console.log(services);
  // if(loading){
  //    return <progress className="progress w-56"></progress>
  // }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-600">Service</h1>
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
