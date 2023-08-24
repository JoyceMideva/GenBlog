import {PiCopyright, PiFacebookLogoFill,PiInstagramLogoFill,PiLinkedinLogoFill,PiTwitterLogoFill } from "react-icons/pi";
import logo from "../../public/images/logo.svg";
import Image from "next/image";

function Footer(){
    return(
        <div className="">
            <div className=" container mx-auto">
                <h2 className="font-bold text-center text-3xl">JOIN OUR COMMUNITY OF OVER <span className=" text-[#0775C6]">200,000</span>  BLOGGERS</h2>
                <div className="flex justify-center items-center py-2 px-4 ">
            
                <form className="w-[100%] ">
                  <input placeholder="Enter your email" type="email" className="p-4 w-[60%] bg-transparent border-2 outline-none" />
                  <button type="submit" className="shadow text-white bg-[#0775C6] p-4 w-[20%] ">Subscribe</button>
                </form>
              </div>
              <div className="flex justify-between items-center gap-10">
                <div className="my-4">
                <Image  src={logo} width={200} height={200}  />
                <p className="text-2xl">Follow us on :</p>
                <div className="flex items-center justify-center gap-5">

                <PiFacebookLogoFill size={40}/>
                <PiTwitterLogoFill size={40}/>
                <PiInstagramLogoFill size={40}/>
                <PiLinkedinLogoFill size={40}/>
                </div>
                </div>
                <div className="py-2">
                    <h3 className="text-[#0775C6] text-3xl">Quick Links</h3>
                    <ul className="text-2xl">
                        <li>About blog</li>
                        <li>News Letter</li>
                        <li>Contact Us</li>
                        <li>Podcasts</li>
                        <li>Careers</li>
                        <li>Write for Us</li>
                    </ul>
                </div>
                <div className="py-2">
                <h3 className="text-[#0775C6] text-3xl">Top Articles</h3>
                    <ul className="text-2xl"> 
                        <li>How to start a blog</li>
                        <li>How to create a great blog content</li>
                        <li>How to find readers for your blog</li>
                        <li>Strategies to build a community</li>
                        <li>How to create money blogging</li>
                        <li>Ways to make blogging life easier</li>
                    </ul>
                </div>
              </div>
                    </div>
                <div className="w-[100%] bg-slate-200 flex items-center justify-center gap-2 ">
                    <p>Copyright</p>
                    <PiCopyright/>
                    <p>  2023 genblog.com .All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer