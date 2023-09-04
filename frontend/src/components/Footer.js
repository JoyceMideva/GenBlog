import {PiCopyright, PiInstagramLogoFill,PiLinkedinLogoFill } from "react-icons/pi";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer(){
    return(
        <div className="">
            <div className=" container mx-auto">
                <h2 className="font-bold text-center my-[2em] text-3xl">JOIN OUR COMMUNITY OF OVER <span className=" text-[#0775C6]">200,000</span>  BLOGGERS</h2>
                <div className="flex  justify-between items-center py-2 px-5 ">
            
                <form className="w-[100%]  flex justify-center  items-center">
                  <input placeholder="Enter your email" type="email" className="p-4 w-[40%]  border-2 bg-transparent outline-none" />
                  <button type="submit" className=" text-white  bg-[#0775C6] p-4 w-[10%] ">Subscribe</button>
                </form>
              </div>
              <div className="flex justify-between items-center gap-10">
                <div className="my-4">
                <Image  src={logo} width={200} height={200}  />
                <p className="text-2xl py-[.5em]">Follow us on :</p>
                <div className="flex items-center justify-center gap-5 py-[.3em]">

                <FaFacebook className="text-[#0775c6]" size={40} />
              <AiFillTwitterCircle className="text-[#0775c6]" size={45} />
              
                <PiInstagramLogoFill className="text-[#0775c6]" size={40}/>
                <PiLinkedinLogoFill className="text-[#0775c6]" size={40}/>
                </div>
                </div>
                <div className="py-2">
                    <h3 className="text-[#0775C6] text-3xl">Quick Links</h3>
                    <ul className="text-2xl py-3">
                        <li className="py-2">About blog</li>
                        <li className="py-[.3em]">News Letter</li>
                        <li className="py-[.3em]" >Contact Us</li>
                        <li  className="py-[.3em]">Podcasts</li>
                        <li  className="py-[.3em]">Careers</li>
                        <li className="py-[.3em]">Write for Us</li>
                    </ul>
                </div>
                <div className="py-2">
                <h3 className="text-[#0775C6] text-3xl py-2">Top Articles</h3>
                    <ul className="text-2xl"> 
                        <li className="py-[.3em]">How to start a blog</li>
                        <li  className="py-[.3em]">How to create a great blog content</li>
                        <li  className="py-[.3em]">How to find readers for your blog</li>
                        <li  className="py-[.3em]">Strategies to build a community</li>
                        <li  className="py-[.3em]">How to create money blogging</li>
                        <li  className="py-[.3em]">Ways to make blogging life easier</li>
                    </ul>
                </div>
              </div>
                    </div>
                <div className="w-[100%] py-[1em] bg-slate-200 flex items-center justify-center gap-2 ">
                    <p>Copyright</p>
                    <PiCopyright/>
                    <p>  2023 genblog.com .All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer