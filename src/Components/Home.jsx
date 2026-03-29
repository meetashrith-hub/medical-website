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
         SKY Prism Eye Care provides comprehensive on-site health screenings for Bangalore’s leading organizations. We bring the clinic to you, ensuring your team stays sharp, healthy, and focused without ever leaving the office
        </p>
      </div>
    </div>
  );
};

export default Home;