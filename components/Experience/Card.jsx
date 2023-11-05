import React from 'react'
import Pills from '../common/Pills'

const Card = ({company_name,data,year_of_service,job_title,description}) => {

  return (
    <div className="py-1 grid grid-flow-row gap-1">
    <div className="grid grid-flow-col justify-between">
      <h3 className="font-semibold text-mint-cream">{company_name}</h3>
      <h5 className="text-sm text-mint-cream">{year_of_service}</h5>
    </div>
    <h4 className="text-slate-500">{job_title}</h4>

    {description.map((item,index) => (
        <p className="text-sm text-mint-cream" key = {index}>
            {item}
        </p>
    ))}
  

    <div className="space-y-1">
      <div className="pt-1 text-xs space-x-2">

        <Pills data={data} type={'light'}/>

      </div>
    </div>
  </div>
  )
}

export default Card