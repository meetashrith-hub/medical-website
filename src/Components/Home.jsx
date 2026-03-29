import React from "react";
import Button from "../Layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Precision Care. Healthier Teams. Better Workplaces...
        </h1>
        <p>
          SKY Prism brings high-precision health screenings directly to Bangalore’s leading offices. We eliminate the clinic commute, ensuring your team stays sharp, healthy, and focused—without ever leaving the workplace.
        </p>
      </div>
    </div>    
  );
};

export default Home;