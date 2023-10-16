import React from 'react'

const Novaware = () => {
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
        <span className="border border-gray-500 rounded-full px-4 py-1">
          PHP
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
          JavaScript
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
            Java
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
            C++
        </span>
      </div>
      <div className="pt-2 space-x-2 text-xs">
        <span className="border border-gray-500 rounded-full px-4 py-1">
          JQuery
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
          MySQL
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
        Oracle DB
        </span>
      </div>
    </div>
  </div>
  )
}

export default Novaware