import About from '@/components/About'
import Banner from '@/components/Banner'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/common/Footer'
import Image from 'next/image'



export default function Home() {
  return (
<>

    <div className='top-0 bg-gradient-to-b from-oxford-blue  via-oxford-blue  to-blue-500 '>
    <Header/>
    <Banner/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Footer/>
  
    </div>
    </>
  )
}

