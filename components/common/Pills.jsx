import React from 'react'

const Pills = (props) => {

 const dataArr = props.data;

  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
        {
            dataArr.map((item,index) => (
                <li className="mr-1.5 mt-2" key = {index}>
                <div className="flex items-center rounded-full bg-purple-900 px-3 py-1 text-xs font-medium leading-5 text-gray-100 ">
                  {item.name}
                </div>
              </li> 
            ))
        }
    </ul>
  )
}

export default Pills