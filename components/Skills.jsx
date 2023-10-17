import React from "react";
import Pills from "./common/Pills";

const Skills = () => {
  const skillsList = [
    "Java",
    "PHP",
    "JavaScript",
    "GroovyScript",
    "C++",
    "Batch",
    "Shell Script",
    "CodeIgniter",
    "Laravel",
    "Grails",
    "React-NextJS",
    "QTCreator",
    "MySQL",
    "Oracle SQL",
    "NoSQL",
    "Git",
    "SVN",
    "AWS",
    "Azure",
    ];

  return (
    <section className="bg-gray-200">
      <div className="md:container mx-auto flex flex-col py-4 px-4">
        <h2 className="text-xl font-semibold">My Skills </h2>
        <Pills data={skillsList} />
      </div>
    </section>
  );
};

export default Skills;
