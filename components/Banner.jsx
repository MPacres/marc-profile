import React from 'react'

const Banner = () => {
  return (
    // <section className='bg-gray-200'>
    //     <div className='md:container mx-auto flex flex-col justify-center items-center py-24'>
    //         <h2 class ='uppercase font-bold text-4xl text-center'>HEY, I'M MARC</h2>
    //         <div className='md:w-1/2 pt-10 px-2'>
    //         <p class ='text-center'>
    //           A Sr. Fullstack software Engineer that builds application software for different platform devices.
    //         </p>
    //         </div>
    //     </div>
    // </section>
    <section className='bg-gray-200'>
   <div className='md:container mx-auto flex flex-col py-8 px-4'>
    <h2 className='uppercase text-4xl font-semibold'>MARC PACRES</h2>
    <div>
    <h3 className='text-xl'>Sr. Fullstack Engineer</h3>
    <p>Specialized in building application for different platform devices to </p>
    </div>
   </div>
    </section>
  )
}

export default Banner