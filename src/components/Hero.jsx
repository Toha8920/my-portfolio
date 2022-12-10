import React from "react";
import hero from '../assets/images/hero (2).png'

const Hero = () => {

  return <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
    <div className="flex-1 flex items-center justify-center h-full">
      <img src={hero} alt="" className="rounded-md md:h-[300px] md:w-[350px] sm:h-[180px] w-[200px]  object-cover" />
    </div>
    <div className="flex-1">
      <div className="md:text-left text-center">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-cyan-600 md:text-6xl text-5xl ">
            Hello !
            <br />
          </span>
          My Name Is <span>Toha Islam</span>
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Front End Developer
        </h4>
        <button style={{ display: 'inline-block' }} className="btn-primary mt-8">Contact Me</button>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          <a href="https://www.instagram.com/tohaislam8920/"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="https://www.facebook.com/irk.toha"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="https://www.linkedin.com/in/tohaislam/"><ion-icon name="logo-linkedin"></ion-icon></a>
          <a href="https://github.com/Toha8920/"><ion-icon name="logo-github"></ion-icon></a>
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
