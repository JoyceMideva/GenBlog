'use client'
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import { useState } from "react"

function Newblog(){
    const[newBlog,setNewBlog]=useState({})
    const handleChange = (e) => {
        setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
      };

      function handleAdd(e) {
        e.preventDefault()
        console.log(handleChange())
      }
    return(
        <div>
    <Nav/>
<div className="container mx-auto    ">
    <h2 className="text-5xl font-bold text-[#0775c6] text-center">CREATE A POST</h2>
<div className="h-[fit-content] my-4 bg-white rounded-md  text-center mb-5 py-5  mx-auto flex flex-col w-[50%] items-center  ">
    <input onChange={(e) => handleChange(e)} type="text" name="Blog title"  className="w-[70%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5 rounded-md" placeholder="Blog title"/>
    <input onChange={(e) => handleChange(e)} type="file" name="Blog image" className="w-[70%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5rounded-md"  placeholder/>
    <textarea onChange={(e) => handleChange(e)} rows={5} name="Blog post" className="w-[70%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5 rounded-md" cols={10} placeholder="Write your post here"></textarea>
    <input onChange={(e) => handleChange(e)} type="text " name="Blog author" className="w-[70%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5 " placeholder="Blog author"/>
<button onClick={(e) => handleAdd(e)} className="mx-auto w-[70%] text-white bg-[#0775c6] py-4 px-2 my-5 rounded-md"> submit</button>
</div>
</div>
<Footer/>
</div>
    )
}
export default Newblog