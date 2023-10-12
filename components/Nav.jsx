"use client"
import React, { useState } from "react";
import Link from "next/link";

const NavLink = () => {
  return (
    <>
      <Link href="/about">About</Link>
      <Link href="/about">About</Link>
      <Link href="/about">About</Link>
    </>
  );
};


const Nav = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }


    return(
        <nav className="w-1/3">
            <div className="flex justify-between">
                <NavLink />
            </div>
            <div>
                <button></button>
            </div>
        </nav>
    )
}

export default Nav;
