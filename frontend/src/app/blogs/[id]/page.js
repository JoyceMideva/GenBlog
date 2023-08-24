"use client";
import Image from "next/image";
import { useEffect, useState } from "react"
import blog from "../../../../public/images/profile.png";
import Nav from "@/components/Nav";
function Singleblog({params}){
    const[singleBlog,setSingleBlog]=useState({})
    const url=`http://127.0.0.1:8000/api/blogs/${params.id}`
    let imageUrl="http://127.0.0.1:8000/api"
    useEffect(()=>{
        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setSingleBlog(data);
          console.log(singleBlog);
        });
    },[])
    const date=new Date(singleBlog.date_published)
    const year=date.getFullYear()
    const month=date.toLocaleString("default",{month:"long"})
    const day=date.getDate()
     const formatted_date=`${day} ${month} ${year}`
    console.log(month)
return(
    
    <div>
      <Nav/>  
<div className="container mx-auto">
    <h2 className="text-[#0775C6] text-5xl text-center font-bold">{singleBlog.blog_title}</h2>
    <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">

        <Image src={blog}/>
        <h3 className="text-2xl font-semibold">{singleBlog.blog_author}</h3>
        </div>
        <h3 className="text-2xl">{formatted_date}</h3>
    </div>
    <div ><img
                  src={`${imageUrl}${singleBlog.blog_image}`}
                  alt="posts"
                  className=" w-[100%] h-[80vh]  "
                /></div>
    <p className="text-2xl">{singleBlog.blog_post}</p>
</div>
<p className="text-[c] text-lg text-center font-semibold my-4">Place comments</p>
<div className="w-[40vw] h-[20vh] border-2 mx-auto border-[#0775C6] rounded-lg"></div>
    </div>
)
}
export default Singleblog