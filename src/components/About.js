import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Roopali.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            I am proactive computer science professional holding a master's degree in Computer Science and possessing over three years of experience in various programming languages and IT tools. 
            I have developed a strong proficiency in Python, Java, C++, SQL, React, Node.js, HTML, CSS, and JavaScript, enabling me to create innovative software solutions that drive business success. 
            Throughout my career, I have consistently delivered exceptional results and now I am excited to secure a challenging full-time opportunity in software development or engineering, where I can make a meaningful impact. 
            With my strong technical acumen and dedicated work ethic, I am confident in my ability to contribute effectively to your team. 
            I invite you to connect with me so that we can explore how I can bring fresh perspectives and a proactive mindset to create remarkable software solutions that truly make a difference.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="profile_photo"
            src="./profile_photo.jpg"
          />
        </div>
      </div>
    </section>
  );
}