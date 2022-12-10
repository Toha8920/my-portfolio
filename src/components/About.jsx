import React from "react";
import aboutImg from '../assets/images/about.png'

const About = () => {
  const info = [
    { text: 'Years experience', count: '01' },
    { text: 'Complete Projects', count: '10' },
    { text: 'Courses Work', count: '12' },
  ]
  return <section id="about" className="py-10 text-white">
    <div className="text-center mt-8">
      <h3 className="text-4xl font-semibold">
        About <span className="text-cyan-600">Me</span>
      </h3>
      <p className="text-gray-400 my-3 text-lg">My Introduction</p>
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="text-gray-300 my-3 ">
            <p className="text-justify leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro impedit enim dolor accusantium natus blanditiis atque incidunt laborum officiis reiciendis deserunt fuga saepe mollitia repellat obcaecati praesentium eum nam et accusamus dolorem, perferendis architecto voluptates ea! Quod sint quos molestias obcaecati laboriosam tempore est voluptates blanditiis! Cum sapiente impedit a.
            </p>
            <div className="flex mt-10 items-center gap-7">
              {
                info.map(content => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count} <span className="text-cyan-600">+</span>{""}</h3>
                    <span>{content.text}</span>
                  </div>
                ))
              }
            </div>
            <br />
            <br />
            <a href="./src/assets/My Resume.pdf" download>
              <button className="btn-primary">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
            <img src={aboutImg} alt="" className="w-full object-cover bg-cyan-600 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
