import React from "react";
import Synergy from "./Experience/Synergy";
import Fujitsu from "./Experience/Fujitsu";
import Accenture from "./Experience/Accenture";
import Novaware from "./Experience/Novaware";



const Experience = () => {
  return (
    <section>
    <div className="p-4 space-y-8">
      <h2 className=" text-xl font-semibold">Experience</h2>
      <Synergy/>
      <Fujitsu/>
      <Accenture/>
      <Novaware/>
    <div>
    <a href= "#" className="underline underline-offset-4 text-lg">View Full Résumé</a>
    </div>
  

    </div>
    </section>
 
  );
};

export default Experience;
