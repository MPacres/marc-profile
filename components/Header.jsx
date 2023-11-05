import React from 'react'
import Logo from './Logo'
import Nav from './Nav'




const Header = () => {
  return (


    

    <nav className="bg-white sticky top-0 z-[20] mx-auto flex w-full items-center justify-between px-1 py-1  flex-wrap md:container md:bg-white">
    <div className="flex justify-between items-center ">
      <span className="text-2xl font-[Poppins] cursor-pointer">
      <Logo/> 
      </span>
    </div>
    <Nav/>
  </nav>




    
    // <header className='custom-gradient'>


    // <div  className=" bg-white/30 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between px-1 py-1  flex-wrap md:container md:bg-white ">


// < div  className=" bg-red-100/60 sticky top-0 z-[20] mx-auto  w-full px-1 py-20 absolute">


    // </div>
// </header>
  )
}

export default Header