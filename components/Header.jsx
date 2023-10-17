import React from 'react'
import Logo from './Logo'
import Nav from './Nav'




const Header = () => {
  return (
    // <header className='custom-gradient'>


    <div  className=" bg-deep-purple sticky top-0 z-[20] mx-auto flex w-full items-center justify-between px-4 py-2 flex-wrap md:container md:bg-white ">
    <Logo/>
    <Nav/>

    </div>
// </header>
  )
}

export default Header