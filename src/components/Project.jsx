import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/phot.jpg";
import project2 from "../assets/images/screencapture-used-products-resale-c34e1-web-app-2022-12-11-10_24_35.png";
import project3 from "../assets/images/screencapture-elarning-courses-web-app-2022-12-11-10_25_17.png";
import project4 from "../assets/images/screencapture-precious-croquembouche-a927df-netlify-app-2022-12-11-10_25_54.png";
import project5 from "../assets/images/screencapture-benevolent-mandazi-2e3dc2-netlify-app-2022-12-11-10_26_29.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Photography Website",
      github_link: "https://github.com/Toha8920/photography-website-client-repo",
      live_link: "https://photography-a5d3a.web.app/",
    },
    {
      img: project2,
      name: "Used Product Resale",
      github_link: "https://github.com/Toha8920/used-product-resale-client-repo",
      live_link: "https://used-products-resale-c34e1.web.app/",
    },
    {
      img: project3,
      name: "E Learning Website",
      github_link: "https://github.com/Toha8920/e-learning-courses-client-repo",
      live_link: "https://elarning-courses.web.app/",
    },
    {
      img: project4,
      name: "Solving Question",
      github_link:
        "https://github.com/Toha8920/solving-questions-repo",
      live_link: "https://precious-croquembouche-a927df.netlify.app/",
    },
    {
      img: project5,
      name: "Toha's Fitness Club",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://benevolent-mandazi-2e3dc2.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className=" max-w-6xl gap-6 px-5 mx-auto">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg h-[300px] w-full" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                    <button className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Details</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;