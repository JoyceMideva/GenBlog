"use client"
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import profile from "../../../public/images/profile.png";
import blog from "../../../public/images/hero.jpg";

import Image from "next/image";
import {
  PiFacebookLogoFill,
  PiTwitterLogoFill,

} from "react-icons/pi";
import {FaEnvelope} from "react-icons/fa"
function Profile() {
  return (
    <div>
      <Nav />
      <div className=" container mx-auto border-2">
        <div className="flex items-center  gap-2">
          <Image width={100} src={profile} />
          <p className="text-2xl text-[#0775c6]">{localStorage.getItem("username")}</p>
        </div>
        <div className="flex gap-11">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-[#0775c6]">Bio</h3>
            <p className="text-1xl font-bold">
              Joyce here,A Social Media Influencer/Software Engineer. By day, I
              am a Software Engineer, by night, I’m a Social Media Influencer.
              Join me on my journey as I try changing my community.Together,
              Let’s inspire, educate, and connect!” I am a hard-working and
              driven individual who isn't afraid to face any challenge. I'm
              passionate about my work and I know how to get the job done. I
              would describe myself as an open and honest person who doesn't
              believe in misleading other people and tries to be fair in
              everything I do.
            </p>
            <div className="flex item-center my-2 gap-4">
              <PiFacebookLogoFill size={40} />
              <PiTwitterLogoFill size={40} />
              <FaEnvelope size={40} />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl text-[#0775c6]">My Blogs</h3>
            <div className="flex w-[100%] items-center gap-2">
              <div className=" w-[20%] h-[17vh]">
                <Image src={blog}  className="w-[20] h-[20]"/>
              </div>
              <div className="w-[80%] h-[17vh]">
                <h3 className="text-1xl font-bold">
                  Lorem Ipsum es simplemente...
                </h3>
                <p>Lorem Ipsum es simplemente el texto de relleno de las...</p>
              </div>
            </div>
                <p className="text-xl text-[#0775c6] text-end">All Blogs</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
