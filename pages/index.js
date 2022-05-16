import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Home/Contact'
import LandingHome from '../components/Home/LandingHome'
import Myskills from '../components/Home/MySkills'
import MyWorks from '../components/Home/MyWorks'


export default function Home() {
  return (
    <div className='pt-[60px]'>
      <LandingHome/>
      <Myskills/>
      <MyWorks/>
      <Contact/>
    </div>
  )
}
