import React from 'react'

const Accenture = () => {
  return (
    <div className="py-2 grid grid-flow-row gap-1">
    <div className="grid grid-flow-col justify-between">
      <h3 className="font-semibold">Accenture</h3>
      <h5 className="text-sm">2021 - 2022</h5>
    </div>
    <h4 className="text-slate-500">Sr. Software Engineer</h4>

    <p className="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
      quas similique molestias aspernatur voluptatem animi non debitis, ea
      voluptatum eligendi. Laborum quas similique molestias aspernatur
      voluptatem animi non debitis, ea voluptatum eligenasdfdi.
    </p>
    <div className="space-y-2">
      <div className="pt-2 text-xs space-x-2">
        <span className="border border-gray-500 rounded-full px-4 py-1">
          GroovyScript
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
          JavaScript
        </span>

        <span className="border border-gray-500 rounded-full px-4 py-1">
          RactiveJS
        </span>
      </div>
      <div className="pt-2 space-x-2 text-xs">
        <span className="border border-gray-500 rounded-full px-4 py-1">
          JQuery
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
          PHP
        </span>
        <span className="border border-gray-500 rounded-full px-4 py-1">
        Oracle DB
        </span>
      </div>
    </div>
  </div>

  )
}

export default Accenture