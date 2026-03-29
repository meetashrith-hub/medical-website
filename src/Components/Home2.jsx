import React from "react";
import Button from "../Layouts/Button";


const Home2 = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-left lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10 justify-center" >
       <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <h2 className=" text-2xl  text-center lg:text-start">Vision & Eye Care</h2>
        <p className=" text-justify lg:text-start">
              Combatting digital strain with professional vision testing and Computer Vision Syndrome (CVS) assessments.
	      </p>
        <h2 className=" text-2xl  text-center lg:text-start">Dental Excellence:</h2>
        <p className=" text-justify lg:text-start">
              Complete oral health evaluations, from gum health to hygiene consultations
	      </p>
        <h2 className=" text-2xl  text-center lg:text-start">Essential Health Screening: </h2>
        <p className=" text-justify lg:text-start">
              Vital metric tracking including BP, BMI, and Blood Sugar to catch health risks early.
	      </p>
      </div>
    </div>    
  );
};

export default Home2;