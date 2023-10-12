"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


const NavLinks = () => {
  return (
    <>
      <Link href="/home" className="py-2 md:hover:underline underline-offset-8">Home</Link>
      <Link href="/projects" className="py-2 md:hover:underline underline-offset-8">Projects</Link>
      <Link href="/about" className="py-2 md:hover:underline underline-offset-8">About</Link>
    </>
  );
};


const Nav = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }


    return(
        <>
        <nav className="flex w-1/3 justify-end">
            <div className="hidden md:flex w-60 justify-between">
                <NavLinks />
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavbar}>{
                    isOpen ? <X/> :  <Menu />
                }</button>
            </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-right basis-full text-right md:hidden">
                <NavLinks/>
            </div>
        )
        }
        </>
    )
}

export default Nav;
