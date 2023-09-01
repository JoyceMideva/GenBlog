"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import blog from "../../../../../public/images/profile.png";
import Nav from "@/components/Nav";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Singleblog({ params }) {
  const [singleBlog, setSingleBlog] = useState({});
  const url = `http://127.0.0.1:8000/api/blogs/${params.id}`;
  let imageUrl = "http://127.0.0.1:8000/api";
  const router = useRouter();

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleBlog(data);
        console.log(singleBlog);
      });
  }, []);
  const date = new Date(singleBlog.date_published);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const formatted_date = `${day} ${month} ${year}`;
  console.log(month);

  function handleDelete(e) {
    e.preventDefault();

    axios.delete(url, singleBlog).then((response) => {
      console.log(response);
      router.push("/");
    });
  }

  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <h2 className="text-[#0775C6] text-5xl text-center font-bold">
          {singleBlog.blog_title}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <Image src={blog} width={90} />
            <h3 className="text-2xl font-semibold">{singleBlog.blog_author}</h3>
          </div>
          <h3 className="text-2xl">Posted on: {formatted_date}</h3>
        </div>
        <div>
          <img
            src={`${imageUrl}${singleBlog.blog_image}`}
            alt="posts"
            className=" w-[100%] h-[80vh]  "
          />
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: `${singleBlog.blog_post}` }}
          className="text-2xl"
        ></p>
      </div>
      <div className="flex items-center mx-auto justify-center gap-5 my-4 w-[40vw]">
        <Link  href={`${params.id}/edit`}>
          <button className="border-2 border-[#0775C6] text-[#0775C6] shadow-xl w-[15vw] shadow-grey-200  py-2 px-10  rounded-md">
            EDIT
          </button>
        </Link>
        <button
        
          onClick={(e) => handleDelete(e)}
          className="border-2 text-[white] text-center shadow-xl w-[15vw] bg-[red] shadow-grey-200  py-2 px-10  rounded-md"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
export default Singleblog;
