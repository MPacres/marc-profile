import React from "react";

const Skills = () => {
  return (
    <section className="bg-gray-200">
      <div className="md:container mx-auto flex flex-col py-4 px-4">
        <h2 className="text-xl font-semibold">My Skills</h2>
        <div>
          <div className="pt-4 grid grid-flow-col gap-3 text-center ">
            <span className="py-1 px-6 border border-purple-900 border border-purple-900-purple-900 rounded-full text-sm">JAVA</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">PHP</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">JavaScript</span>
          </div>
          <div className="pt-4 grid grid-flow-col gap-3 break-normal text-center">
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">GroovyScript</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">C++</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">TypeScript</span>
          </div>
          <div className="pt-4 grid grid-flow-col gap-3 break-normal text-center">
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Code Igniter</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Laravel</span>
          </div>
          <div className="pt-4 grid grid-flow-col gap-3 break-normal text-center">
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Groovy Grails</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">React JS</span>
        </div>
          <div className="pt-4 grid grid-flow-col gap-3 break-normal text-center">
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">MySQL</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Oracle SQL</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">NoSQL</span>
          </div>
          <div className="pt-4 grid grid-flow-col gap-3 break-normal text-center">
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Git</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">SVN</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">AWS</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">AZURE</span>
          </div>
          <div className="pt-4 grid grid-flow-col gap-3 break-normal text-center">
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Windows Batch</span>
            <span className="py-1 px-6 border border-purple-900 rounded-full text-sm">Shell Script | Bash</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
