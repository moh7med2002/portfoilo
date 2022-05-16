import {FaWhatsapp,FaInstagram,FaFacebookF} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import Link from 'next/link'
export default function Contact(){
    return(
        <div className="py-[50px] bg-[#EDF7FA] " id='contact'>
            <div className=" container px-6">
                <div  className='flex justify-center items-center gap-[15px]'>
                    <div>
                        <Link href={'https://www.facebook.com/mohammedheshamA'}>
                            <span className='flex items-center justify-center w-[45px] h-[45px] rounded-[50%] bg-[#4267B2] cursor-pointer'>
                                <FaFacebookF className='text-white text-[20px]'/></span>
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://www.instagram.com/mohamed_abohani/'}>
                            <span className='flex items-center justify-center w-[45px] h-[45px] rounded-[50%] bg-[#C13584]  cursor-pointer'>
                                <FaInstagram  className='text-white text-[20px]'/></span>
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://wa.me/+972593412175'}>
                            <span className='flex items-center justify-center w-[45px] h-[45px] rounded-[50%] bg-[#25D366]  cursor-pointer'>
                                <FaWhatsapp  className='text-white text-[20px]'/></span>
                        </Link>
                    </div>
                    <div>
                        <Link href={'mailto:moha7amedheshamabohani@gmail.com'}>
                            <span className='flex items-center justify-center w-[45px] h-[45px] rounded-[50%] bg-[#c71610]  cursor-pointer'>
                                <SiGmail  className='text-white text-[20px]'/></span>
                        </Link>
                    </div>
                </div>
                <h6 className='text-center mt-[10px] text-[14px] font-medium'>Fell Free To Click In Any Link And  Start Contact Me</h6>
            </div>
        </div>
    )
}