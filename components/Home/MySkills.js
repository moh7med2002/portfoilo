import {FaSass, FaBootstrap,FaReact}from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiTailwindcss,SiJavascript,SiNextdotjs} from 'react-icons/si'
export default function Myskills(){
    return(
        <div className='bg-[#EDF7FA] py-[50px]'>
            <div className="container px-6">
            <h3 className='text-[26px] font-bold text-[#21243D] mb-[20px]'>My Skills</h3>
            <p className='text-[#21243D] font-normal text-base'>
                I will use this technology to create your front-end website.</p>
            <div className='mt-[30px] grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2
             gap-[20px]'>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#f06529] duration-300'>
                    <AiFillHtml5 className='text-[60px] text-[#f06529] group-hover:scale-105 group-hover:text-[#ffffff] duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#66D3FA] duration-300'>
                    <IoLogoCss3 className='text-[60px] text-[#66D3FA] group-hover:scale-105 group-hover:text-[#ffffff] duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#553C7B] duration-300'>
                    <FaBootstrap className='text-[60px] text-[#553C7B] group-hover:scale-105 group-hover:text-[#ffffff] duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#2596be] duration-300'>
                    <SiTailwindcss className='text-[60px] text-[#2596be] group-hover:text-[#FFFFFF] group-hover:scale-105 duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#CD6799] duration-300'>
                    <FaSass className='text-[60px] text-[#CD6799] group-hover:scale-105 group-hover:text-[#ffffff] duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#f0db4f] duration-300'>
                    <SiJavascript className='text-[60px] text-[#f0db4f] group-hover:scale-105 group-hover:text-[#323330] duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[#61DBFB] duration-300'>
                    <FaReact className='text-[60px] text-[#61DBFB]  group-hover:scale-105 group-hover:text-[#ffffff] duration-300'/>
                </span>
                <span className='bg-[#FFFFFF] rounded-[4px] h-[120px] flex items-center justify-center group
                hover:scale-105 hover:bg-[black] duration-300'>
                    <SiNextdotjs className='text-[60px] group-hover:scale-105 group-hover:text-white duration-300'/>
                </span>
            </div>
        </div>
        </div>
    )
}