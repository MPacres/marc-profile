import React from 'react'

const Pills = (props) => {

 const dataArr = props.data;
 const type = props.type? props.type: 'light'

  return (
    <ul className="flex flex-wrap" aria-label="Technologies used">
        {
            dataArr.map((item,index) => (
                <li className="mr-1.5 mt-2" key = {index}>
                {props.type == 'light' ? (
                  <div className="flex items-center rounded-md bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-100 ">
                        {item.name ? item.name:item }
                        </div>
                ): (
                  <div className='flex items-center rounded-md bg-oxford-blue px-3 py-1 text-xs font-medium leading-5 text-mint-cream'>
                     {item.name ? item.name:item }
                  </div>      
                    )
                }
              </li> 
            ))
        }
    </ul>
  )
}

export default Pills