import React from 'react'

const Experience = () => {
  return (
    <section>
        <div className='p-4'>
            <h2 className=' text-xl font-semibold'>Experience</h2>


            <div className='py-2 grid grid-flow-row gap-1'>
                <div className='grid grid-flow-col justify-between'>
                <h3 className='font-semibold'>Synergy Infoconnect</h3>
                <h5 className='text-sm'>2023 - Present</h5>
                </div>
                <h4 className='text-slate-500'>Fullstack Developer</h4>
           
                <p className='text-sm'>Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit.
                      Laborum quas similique molestias aspernatur
                       voluptatem animi non debitis, ea voluptatum eligendi.
                       Laborum quas similique molestias aspernatur
                       voluptatem animi non debitis, ea voluptatum eligenasdfdi.
                </p>

                <div className='pt-2 gap-2 text-xs'>
                        <span className='border border-gray-500 rounded-full px-4 py-1'>Groovy</span>
                        <span className='border border-gray-500 rounded-full px-4 py-1'>Grails</span>
                        <span className='border border-gray-500 rounded-full px-4 py-1'>Ractive JS</span>
                </div>

                <div className='pt-2 grid grid-flow-col text-center gap-2 text-xs'>
                <span className='border border-gray-500 rounded-full px-4 py-1'>JavaScript</span>
                        <span className='border border-gray-500 rounded-full px-4 py-1'>JQuery</span>
                        </div>

                
            </div>

        </div>
    </section>
  )
}

export default Experience