import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineDownloadForOffline } from "react-icons/md";



const Footer = () => {
  return (
    <>
        <div className="w-[90%] mx-auto md:flex lg:gap-5 xl:gap-8 gap-2 md:mt-20 mt-5">
            <div className="flex-1 my-6 md:my-0">
                <h1 className="py-2 uppercase border-b-2 font-semibold">Links</h1>
                <div className="flex mt-5 flex-col gap-3">
                    <p className="">Home</p>
                    <p className="">Parks</p>
                    <p className="">Solutions</p>
                    <p className="">Explore</p>
                    <p className="">Sustainablity</p>
                    <p className="">Contact us</p>
                </div>
            </div>
            <div className="flex-1 my-6 md:my-0 ">
                <h1 className="py-2 uppercase border-b-2 font-semibold">Contact</h1>
                <div className="flex flex-col gap-3 mt-5">
                    <p>Horizon Industrial Parks Pvt Ltd
                        Floor 15, Tower 1, One World Center
                        Lower Parel, Mumbai 400 013
                    </p>
                    <p className="underline cursor-pointer">contactus@HiParks.com</p>
                    <p className="underline cursor-pointer">+91 88799 70705</p>

                    <div className="">
                        <h1 className="font-semibold pb-2 uppercase text-sm border-b-2">follow us</h1>
                        <div className="flex items-center text-4xl mt-2 gap-3">
                            <FaLinkedinIn />
                            <FaYoutube />
                            <AiFillInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 my-6 md:my-0">
                <h1 className="py-2 uppercase border-b-2 font-semibold">download</h1>
                <div className="flex items-center gap-3 mt-5" >
                    <AiOutlineUser />
                    <input type="text" className="border-b-2 outline-none" placeholder="enter name"/>
                </div>
                <div className="flex items-center gap-3 mt-5" >
                    <GoMail />
                    <input type="text" className="border-b-2 outline-none" placeholder="enter email"/>
                </div>
                <div className="flex items-center gap-3 mt-5" >
                    <div className="flex gap-3 items-center  ">
                        <IoIosPhonePortrait />
                        <input type="text" className="border-b-2 outline-none" placeholder="+91"/>
                    </div>
                    <div className="xl:flex items-center gap-3 md:hidden   ">
                        <span className="underline text-xs mr-2 text-orange-400">send otp</span>
                        <span className="underline text-xs">enter otp</span>
                    </div>
                </div>
                <div className="cursor-pointer bg-[#F47920] text-white flex items-center mt-5 justify-center md:py-4 md:px-4 p-2 xl:w-[60%] gap-3 rounded-full text-base">
                    <span className="uppercase text-xs">Download Brochure</span>
                    <MdOutlineDownloadForOffline className="md:text-xl"/>
                </div>
            </div>
        </div>


        <div className="w-[90%] mx-auto text-sm lg:text-base text-center py-2 md:flex justify-between my-10">
            <p>2023 Horizon Industrial Parks. All Rights Reserved.</p>
            <p>Privacy policy | Disclaimer</p>
        </div>



    </>
  )
}

export default Footer