"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


const NavLinks = () => {
  return (
    <>
      <Link href="/home" className="py-2  text-oxford-blue md:border-0 md:text-red-200 md:underline md:hover:underline underline-offset-8">Home</Link>
      <Link href="/projects" className="py-2 text-oxford-blue md:border-b-0 md:hover:underline underline-offset-8">Projects</Link>
      <Link href="/about" className="py-2 text-oxford-blue md:border-b-0 md:hover:underline underline-offset-8 bg-p">About</Link>
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
        <nav className="flex w-1/3 justify-end px-2 items-center origin-center">
            <div className="hidden md:flex w-60 justify-between">
                <NavLinks />
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavbar}>{
                    isOpen ? <X className="text-oxford-blue"/> :  <Menu className="text-oxford-blue" />
                }</button>
            </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-right basis-full text-right text-oxford-blue pr-3 md:hidden">
                <NavLinks/>
            </div>
        )
        }
        </>
    )
}

export default Nav;
