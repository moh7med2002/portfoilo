import Image from "next/image"
import { useRouter } from "next/router"
export default function LandingHome(){
    const router=useRouter();
    return(
        <div >
            <div className="container px-6 py-[50px]">
                <div className=" text-center">
                    <h2 className=" text-center font-[600] leading-[120%] max-w-[800px] mx-auto text-[22px] sm:text-[30px]">
                    Hi&sbquo; I&rsquo;m Mohamed&sbquo; I study computer science engineering and I&rsquo;m Front-End developer. 
                    I will help you create your website interface using the best technologies.
                    </h2>
                    <button className="bg-[#FF6464] w-[200px] h-[40px] mt-[30px] text-[#FFFFFF]" onClick={()=>router.push('/#contact')}>
                        Feel free to contact me</button>
                </div>
            </div>
        </div>
    )
}