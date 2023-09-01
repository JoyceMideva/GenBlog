"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import profile from "../../../public/images/profile.png";
// import blog from "../../../public/images/hero.jpg";

import Image from "next/image";
import { PiFacebookLogoFill, PiTwitterLogoFill } from "react-icons/pi";
import {CiFacebook, CiTwitter} from "react-icons/ci";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import { useContext,useState,useEffect } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";


import { StateContext } from "@/context/state";
import Link from "next/link";
function Profile() {
  const { isLogin, setIsLogin } = useContext(StateContext);
  const[myBlogs,setMyBlogs]=useState([])
  const url = "http://127.0.0.1:8000/api/blogs/";
  let imageUrl="http://127.0.0.1:8000/api"
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
    }, []);
    console.log(blogs);
   blogs.forEach((blog) => {
    if(blog.blog_author===isLogin.username){
      myBlogs.push(blog)
    }
    console.log(myBlogs)
  });
  return (
    <div>
      <Nav />
      <div className=" container mx-auto border-2 border-[#0775c6] rounded-lg p-4 my-5">
        <div className="flex items-center  gap-2">
          <Image width={100} src={profile} />
          {/* <img src="../../../public/images/profile.png"/> */}
          <p className="text-2xl text-[#0775c6]">{isLogin.username}</p>
        </div>
        <div className="flex gap-11">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-[#0775c6]">Bio</h3>
            <p className="text-1xl my-2">
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
            <div className="flex item-center my-4 gap-4">
              <FaFacebook size={40} />
              <AiFillTwitterCircle size={45} />
              <FaEnvelope size={40} />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-3xl text-[#0775c6] font-bold">My Blogs</h3>
            {myBlogs.map((blog)=>{
              return(
<Link href={`/profile/blogs/${blog.id}`}>
            <div className="flex w-[100%] items-center gap-2">
              <div className=" w-[20%] h-[17vh]">
                <img src={`${imageUrl}${blog.blog_image}`}
                  alt="posts"
                 className="w-[20] h-[20]" />
              </div>
              <div className="w-[80%] h-[17vh]">
                <h3 dangerouslySetInnerHTML={{__html:`${blog.blog_title.substr(0,150)}...`}} className="text-1xl font-bold">
                </h3>
                <p dangerouslySetInnerHTML={{__html:`${blog.blog_post.substr(0,150)}...`}}></p>

              </div>
            </div>
            </Link>
              )
            })}
            <p className="text-xl text-[#0775c6] text-end">All Blogs</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
