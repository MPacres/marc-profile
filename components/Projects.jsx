import React from "react";

const Projects = () => {
  return (
    <section className="bg-gray-200">
      <div className="md:container mx-auto flex flex-col py-4 px-4">
        <h2 className=" text-xl font-semibold">Projects</h2>
        <div className="py-4 space-y-2">
          <a className="font-semibold">Dashboard App</a>
          <p className="text-sm">
            Here is a sample dashboard app that I built using different
            opensource such ass react-next js, tailwindcss, chartjs, and others.
          </p>
          <div className=" h-40 border border-purple-700 "></div>
        </div>
        <div className="space-y-2">
          <div className="pt-2 text-xs space-x-2">
            <span className="border border-gray-500 rounded-full px-4 py-1">
              React-Next JS
            </span>
            <span className="border border-gray-500 rounded-full px-4 py-1">
              JavaScript
            </span>
            <span className="border border-gray-500 rounded-full px-4 py-1">
              TailwindCSS
            </span>
          </div>
          <div className="pt-2 text-xs space-x-2">
            <span className="border border-gray-500 rounded-full px-4 py-1">
              ChartJS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
