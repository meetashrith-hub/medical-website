import React from "react";

import { RiEyeFill } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Layouts/Button";
import ServicesCard from "../Layouts/ServicesCard";

const eyeServices = <div className="text-left w-full space-y-1"><div>• Vision testing</div><div>• Computer vision syndrome check</div><div>• Spectacle prescription</div><div>• Eye strain assessment</div></div>;
const dentalServices = <div className="text-left w-full space-y-1"><div>• Dental examination</div><div>• Gum health evaluation</div><div>• Cavity detection</div><div>• Oral hygiene consultation</div></div>;
const healthServices = <div className="text-left w-full space-y-1"><div>• Blood pressure check</div><div>• ⁠Blood sugar screening</div><div>• BMI measurement</div><div>• General health consultation</div></div>;

const Services = () => {
  const icon1 = (
    <RiEyeFill size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <FaTooth size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center justify-between">
        <div>
          <h1 className=" text-5xl font-semibold text-center lg:text-center">
            Our Services
          </h1>
          {/* <p className=" mt-2 text-center lg:text-center">
            Eye Care, Dental Care, Health Checkup

          </p> */}
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title={"Eye Check-Up"} description={eyeServices}/>
        <ServicesCard icon={icon2} title={"Dental Check-Up"} description={dentalServices}/>
        <ServicesCard icon={icon3} title={"Basic Health Check-Up"} description={healthServices}/>
   
      </div>
    </div>
  );
};

export default Services;