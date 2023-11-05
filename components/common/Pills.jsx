import React from 'react'

const Pills = (props) => {

 const dataArr = props.data;
 const type = props.type? props.type: 'light'

  return (
    <ul className="flex flex-wrap" aria-label="Technologies used">
        {
            dataArr.map((item,index) => (
                <li className="mr-1.5 mt-2" key = {index}>
                <div className="flex items-center rounded-md bg-pill-blue px-3 py-1 text-xs font-medium leading-5 text-gray-100 ">
                  {item.name ? item.name:item }
                </div>
              </li> 
            ))
        }
    </ul>
  )
}

export default Pills