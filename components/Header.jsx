import React from 'react'
import Logo from './Logo'
import Nav from './Nav'




const Header = () => {
  return (
    // <header className='custom-gradient'>


    <div  className="bg-white sticky top-0 z-[20] mx-auto flex w-full items-center justify-between p-4 flex-wrap  md:bg-white ">
    <Logo/>
    <Nav/>

    </div>
// </header>
  )
}

export default Header