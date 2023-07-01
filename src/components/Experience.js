import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import moment from "moment";

const Experience = ({user}) => {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-justify">
            Presented herewith is a detailed overview of my professional work experience, highlighting my past roles and responsibilities, along with the corresponding achievements and contributions made during my tenure.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">          
          {user && user.work.map((e) => (
            <div key={e.name} className="p-4 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded text-justify">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-white text-lg title-font font-medium">
                    {e.name}, {e.location}
                  </h2>
                  <h2 className="text-white text-2xl title-font font-medium">
                    {e.position}
                  </h2>
                  <h2 className="text-white text-lg title-font font-medium">
                    {moment(e.startDate).format('MMM YYYY')} - {e.endDate ? moment(e.endDate).format('MMM YYYY') : 'Present'}
                  </h2>
                </div>
                <ul className="list-disc">
                  {e.highlights.map((d) => (
                    <li key={d} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;