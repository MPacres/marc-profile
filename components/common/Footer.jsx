import React from 'react'


const Footer = () => {
    const current_year = new Date().getFullYear();

  return (
    <footer>

        <div className='p-4 bg-oxford-blue'>
        <h2 className=' font-extrabold text-lg text-mint-cream'>SOCIAL</h2>
        <div className='flex gap-2'>
        <a href = "https://www.linkedin.com/in/marc-anthony-pacres-086a57122/">
        <img src = "./assets/images/linkedin.svg" className='p-0 m-0 h-7' alt = "linkedin profile" />
        </a>
        <a href ="https://github.com/MPacreshttps://github.com/MPacres">
        <img src = "./assets/images/github.svg" className='p-0 m-0 h-7' alt = "github profile" />
        </a>
        <a href = "">
        <img src = "./assets/images/upwork.svg" className='p-0 m-0 h-7' alt = "upwork profile" />
        </a>
        </div>


        </div>

        <hr />
        <div className='p-4 bg-oxford-blue'>
        <p className='text-xs text-center text-mint-cream '>
        © Copyright - {current_year} <br/><a href="" className='underline underline-offset-4'>Marc Anthony Pacres</a>
        </p>
        </div>

    </footer>
  )
}

export default Footer