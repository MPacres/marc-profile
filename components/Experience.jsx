"use client"
import React, { useEffect, useState } from "react";

import Card from "./Experience/Card";




const Experience = () => {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data and set it in the state
    fetch('./companyList.json')
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((error) => console.error('Error fetching JSON data:', error));
}, []);




  const data = [
    { key : 1, name:'PHP'},
    { key : 2, name:'JavaScript'},
    { key : 3, name:'Java'},
    { key : 4, name:'C++'},
    { key : 5, name:'jQuery'},
    { key : 6, name:'MySQL'},
    { key : 7, name:'Oracle DB'},
    { key : 8, name:'Tortoise SVN'},
    { key : 9, name:'Android Studio'},
    { key : 10, name:'QT Creator'},
    { key : 11, name:'CodeIgniter'}
];

const novaDescription =  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                            quas similique molestias aspernatur voluptatem animi non debitis, ea
                            voluptatum eligendi. Laborum quas similique molestias aspernatur
                            voluptatem animi non debitis, ea voluptatum eligenasdfdi.`;

const novaWare = {
            data : [
              { key : 1, name:'PHP'},
              { key : 2, name:'JavaScript'},
              { key : 3, name:'Java'},
              { key : 4, name:'C++'},
              { key : 5, name:'jQuery'},
              { key : 6, name:'MySQL'},
              { key : 7, name:'Oracle DB'},
              { key : 8, name:'Tortoise SVN'},
              { key : 9, name:'Android Studio'},
              { key : 10, name:'QT Creator'},
              { key : 11, name:'CodeIgniter'}
          ],
          company_name : 'Novaware Systems Inc.',
          year_of_service : '2016 - 2021',
          description : [novaDescription]
  }

  const description = [novaDescription];
  let tempJSON;


  return (
    <section>
    <div className="p-4 space-y-8">
      <h2 className=" text-xl font-semibold">Experience</h2>


      {jsonData !== null ? (
        jsonData.map((item,index) => (
          // <span key={index}>{item.company_name}</span>

          <Card
          data ={item.skills}
          company_name = {item.company_name}
          year_of_service={item.year_of_service}
          description = {item.description}
          key = {index}
        />
        ))

      ):''}


     

    <div>
    <a href= "#" className="underline underline-offset-4 text-lg">View Full Résumé</a>
    </div>
  

    </div>
    </section>
 
  );
};

export default Experience;
