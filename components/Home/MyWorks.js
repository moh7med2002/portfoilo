import { worksData } from "../../data/worksData"
import Image from "next/image";
import { useRouter } from "next/router";
export default function MyWorks(){
    
    let route=useRouter();
    function goToProject(url){
        if(typeof window!=="undefined"){
            window.open(url,"_blank")
        }
    }

    let myWorksJsx=worksData.map((data,index)=>{
        return(
            <div key={data.id} className={`flex sm:flex-row flex-col gap-[30px] ${worksData.length-1!==index &&'border-b-[1px]'}
            dark:border-[#E0E0E0] py-[25px] border-black`} id="works">
                <div>
                    <Image src={data.img} width={'360px'} height={'230px'} className="rounded-[6px]"/>
                </div>
                <div className=" flex-1 ">
                    <h4 className="text-[24px] sm:text-[30px] font-bold text-[#21243D] capitalize mb-[10px] dark:text-white">
                        {data.title}</h4>
                    <p className="text-base text-[#21243D] font-normal dark:text-white">
                        {data.description}</p>
                    <button className="text-[#FFFFFF] bg-[#FF6464] rounded-sm w-[188px] h-[44px] mt-[10px] dark:text-black dark:bg-white"
                    onClick={()=>goToProject(data.projectLink)}>
                        view project</button>
                </div>
            </div>
        )
    });
    return(
        <div className="pt-[70px] dark:bg-black">
            <div className="container px-6">
                <h3 className=" capitalize text-[22px] font-normal text-[#21243D] dark:text-white">featured works</h3>
                <div className="mt-[40px]">
                    {myWorksJsx}
                </div>
            </div>
        </div>
    )
}