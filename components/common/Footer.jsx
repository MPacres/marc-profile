import React from 'react'
import Image from 'next/image'

const Footer = () => {
    const current_year = new Date().getFullYear();

  return (
    <footer>

        <div className='p-4 bg-deep-purple '>
        <h2 className=' font-extrabold text-lg text-white'>SOCIAL</h2>
        <div className='flex gap-2'>
        <Image src = "./assets/images/linkedin.svg" className='p-0 m-0 h-8' alt = "" />
        <img src = "./assets/images/github.png" className='p-0 m-0 h-8' alt = "" />
        <Image src = "./assets/images/upwork.svg" className='p-0 m-0 h-8' alt = "" />
        </div>


        </div>

        <hr />
        <div className='p-4 bg-deep-purple'>
        <p className='text-xs text-center text-gray-200 '>
        © Copyright - {current_year}. Made by <a href="" className='underline underline-offset-4'>Marc Anthony Pacres</a>
        </p>
        </div>

    </footer>
  )
}

export default Footer