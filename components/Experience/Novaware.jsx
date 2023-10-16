import React from 'react'
import Pills from '../common/Pills'


const Novaware = () => {

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

  return (
    <div className="py-2 grid grid-flow-row gap-1">
    <div className="grid grid-flow-col justify-between">
      <h3 className="font-semibold">Novaware Systems Inc.</h3>
      <h5 className="text-sm">2016 - 2021</h5>
    </div>
    <h4 className="text-slate-500">Software Engineer</h4>

    <p className="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
      quas similique molestias aspernatur voluptatem animi non debitis, ea
      voluptatum eligendi. Laborum quas similique molestias aspernatur
      voluptatem animi non debitis, ea voluptatum eligenasdfdi.
    </p>
    <div className="space-y-2">
      <div className="pt-2 text-xs space-x-2">

        <Pills data={data}/>

      </div>
    </div>
  </div>
  )
}

export default Novaware