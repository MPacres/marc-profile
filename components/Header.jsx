import React from 'react'
import Logo from './Logo'
import Nav from './Nav'




const Header = () => {
  return (
    <header className='                    border-b
    border-gray-500'>
    <div  className="
                    bg-dark-background
                    sticky top-0 z-[20]
                    mx-auto flex w-full
                    items-center
                    justify-between
                   p-4 flex-wrap md:container">
    <Logo/>
    <Nav/>

    </div>
</header>
  )
}

export default Header