import React from 'react'

const Footer = () => {
    const current_year = new Date().getFullYear();

  return (
    <footer>

        <div className='p-4 bg-slate-950 space-x-2'>
        <h2 className=' font-extrabold text-lg text-white'>SOCIAL</h2>



        </div>

        <hr />
        <div className='p-4 bg-slate-950'>
        <p className='text-xs text-center text-gray-200 '>
        © Copyright - {current_year}. Made by <a href="" className='underline underline-offset-4'>Marc Anthony Pacres</a>
        </p>
        </div>

    </footer>
  )
}

export default Footer