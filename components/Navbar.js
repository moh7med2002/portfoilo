import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faBarsStaggered , faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Link from 'next/link'
import {useRouter} from 'next/router'
import {MdDarkMode,MdLightMode} from 'react-icons/md'
export default function Nav(){
    let[showNav,setShowNav]=useState(false)
    let router=useRouter()
    return(
        <div className="fixed w-[100%] z-40 shadow h-[60px] bg-[#FFFFFF]">
            <div className="bg-pink  relative w-[100%] h-[100%]">
            <nav className="container px-6 py-3 h-[100%]">
            <div className="flex justify-end items-center h-[100%]">
                <div className={`absolute left-0 w-[100%] bg-pink p-3 top-[60px] text-center ${showNav?"block":'hidden'} bg-[#FFFFFF]
                md:relative md:top-0 md:p-0 md:w-fit md:block duration-300 md:bg-transparent ${showNav&&'shadow'} md:shadow-none`}>
                    <ul className={`flex flex-col md:flex-row gap-[10px] md:gap-[20px]`}>
                    <li className="font-medium text-xl">
                        <Link href={'/'}><a className="text-[#000000]">Home</a></Link>
                        </li>
                        <li className="font-medium text-xl">
                            <Link href={'#works'} ><a className="text-[#000000]">Works</a></Link>
                        </li>
                        <li className="font-medium text-xl">
                            <Link href={'#contact'}><a className="text-[#000000]">Contact</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="border border-black px-[5px] cursor-pointer ml-[6px] md:hidden w-[40px] h-[30px] flex justify-center items-center
                duration-300 hover:border-greenColor hover:text-greenColor " onClick={()=>setShowNav(!showNav)}>
                    {showNav
                    ?<FontAwesomeIcon icon={faXmark} className=" text-[20px] dark:text-white"/>
                    :<FontAwesomeIcon icon={faBarsStaggered}/>}
                </div>
            </div>
        </nav>
        </div>
        </div>
    )
}