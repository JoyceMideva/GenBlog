"use client";
import Hero from "../../public/images/hero.jpg";
import Image from "next/image";
import Link from "next/link"
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useEffect, useState } from "react";
function Blogapp() {
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
        console.log(blogs);
      });
  }, []);
  const date=new Date(blogs.date_published)
  const year=date.getFullYear()
  const month=date.toLocaleString("default",{month:"long"})
  const day=date.getDate()
   const formatted_date=`${day} ${month} ${year}`
  console.log(month)
  return (
    <div className="container mx-auto my-4">
      <div className="flex items-start  gap-10 w-[100%]">
        <div className="w-[70%]">
        {blogs.map((blog) => {
          return (
            <div className=" border-2 mb-10 flex p-3 justify-center gap-3 items-center rounded-lg border-[#0775C6]">
              <div className="w-[40%] h-[200px] rounded-lg">
                <img
                  src={`${imageUrl}${blog.blog_image}`}
                  alt="posts"
                  className="rounded-lg w-[100%] h-[100%]  "
                />
              </div>
              <div className="w-[60%]">
                <h1 className=" text-4xl font-semibold text-[c] my-2">
                  {blog.blog_title}
                </h1>
                <p dangerouslySetInnerHTML={{__html:`${blog.blog_post.substr(0,150)}...`}}></p>
                <div className="text-[#0775C6] flex gap-1 px-1  my-2">
                  <h4>{blog.blog_author}</h4>
                  <h4 className="border-x-2 border-[#0775c6] px-1 ">
                    {blog.date_published}
                  </h4>
                  <h4>0 comments </h4>
                </div>
                <Link href={`blogs/${blog.id}`}><button className="border-2 text-[#0775C6] border-[#0775C6] shadow-grey-200 my-2 py-2 px-10  rounded-md">
                  Read More
                </button></Link>
              </div>
            </div>
          );
        })}
        </div>
        <div className="w-[30%] border-2 rounded-lg border-[#0775C6]">
          <div className="flex bg-white items-center border-2 rounded-md  px-2 my-4  w-[100%]">
            <PiMagnifyingGlassBold />
            <input
              className="  bg-transparent outline-none  w-[100%] py-4 px-12"
              type="text"
              placeholder="search"
            />
          </div>
          <h1 className="text-center text-3xl">Recent Blogs</h1>
          <p className="text-sm text-[#0775C6] text-center">
            How To Setup Timeshift With BTRFS In Fedora
          </p>
        </div>
      </div>
    </div>
  );
}
export default Blogapp;
