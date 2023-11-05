import React from "react";
import Pills from "./common/Pills";

const Projects = () => {
  const dashboardTech = [
    { key: 1, name: "React-Next JS" },
    { key: 2, name: "JavaScript" },
    { key: 3, name: "TailwindCSS" },
    { key: 4, name: "ChartJS" },
  ];

  const qupyTech = [
    { key: 1, name: "ReactJS" },
    { key: 2, name: "JavaScript" },
    { key: 3, name: "TailwindCSS" },
    { key: 4, name: "Laravel" },
    { key: 5, name: "PHP" },
  ];

  return (
    <section className="bg-gray-200">
      <div className="md:container mx-auto flex flex-col py-4 px-4">
        <h2 className=" text-xl font-semibold">Projects</h2>
        <div className="py-4 space-y-2">
          <a className="font-semibold">Qupy!</a>
          <p className="text-sm">
            Pre-registration page of the Qupy!-Dating app.
          </p>
          <div className=" h-40 border border-purple-700 "></div>
        </div>
        <div className="space-y-2">
          <Pills data={qupyTech} />
        </div>

        <div className="py-4 space-y-2">
          <a className="font-semibold">Dashboard App</a>
          <p className="text-sm">
            Here is a sample dashboard app that I built using different
            opensource such ass react-next js, tailwindcss, chartjs, and others.
          </p>
          <div className=" h-40 border border-purple-700 "></div>
        </div>
        <div className="space-y-2">
          <Pills data={dashboardTech} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
