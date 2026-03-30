import React from "react";
import img from "../assets/img/About2.jpeg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h2 className=" text-2xl  text-center lg:text-start" color="blue">Vision & Eye Care :</h2>
        <p className=" text-justify lg:text-start">
              Professional vision testing and CVS assessments to combat digital strain.
	      </p>
        <h2 className=" text-2xl  text-center lg:text-start">Dental Excellence:</h2>
        <p className=" text-justify lg:text-start">
              Complete oral health evaluations, from gum health to hygiene consultations
	      </p>
        <h2 className=" text-2xl  text-center lg:text-start">Essential Health Screening: </h2>
        <p className=" text-justify lg:text-start">
              Vital metric tracking including BP, BMI, and Blood Sugar to catch health risks early.
	      </p>
        <h2 className=" text-2xl  text-center lg:text-start">     </h2>
        <h1 className=" text-4xl font-semibold text-center lg:text-start"><br />The SKY Prism Advantage</h1>
        <h2 className=" text-2xl  text-center lg:text-start">Why Bangalore’s Best Choose Us</h2>
        <p className=" text-justify lg:text-start">
             	• Seamless Integration: We run high-efficiency camps that respect your billable hours and workflows.
        </p>
        <p className=" text-justify lg:text-start">
              	• Expert Medical Teams: Licensed professionals using state-of-the-art diagnostic equipment.
        </p>
        <p className=" text-justify lg:text-start">
              	• Data-Driven Wellness: Affordable programs designed to provide actionable health insights for your employees.
	      </p>
       </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;