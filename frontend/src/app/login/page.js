"use client"
import Footer from "@/components/Footer"


import Nav from "@/components/Nav"
import profile from "../../../public/images/gender.png";
import Image from "next/image";
import { useState } from "react";
function Login (){
    const[user ,setUser]=useState([]);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      function handleLogin(e) {
        e.preventDefault(e)
        console.log(handleChange())
      }

    return(
        <div> 
            <Nav/>
            <div className="bg-[#0775C6] h-[80vh]">
                <h2 className="text-white text-3xl font-bold text-center ">LOGIN TO YOUR ACCOUNT</h2>
<div className="bg-white w-[40vw] h-[60vh] my-[6em] mx-auto flex flex-col rounded-lg ">
    <div className="flex justify-center items-center my-[-5em]">
 <Image width={150} height={150} src={profile}  className="bg-gray-300 rounded-[50%]" />
    </div>
                <div className="my-[3em] w-[40vw] h-[60vh] mx-auto flex flex-col rounded-lg" >
    <input onChange={(e)=>handleChange(e)} type="email" name="emailAddress" className="w-[65%] outline-none mx-auto shadow-xl shadow-grey-200 border-2   py-4 px-2 mt-[5em] " placeholder="Email Address"/>
    <input onChange={(e)=>handleChange(e)} type="password" name="password" className="w-[65%] outline-none  mx-auto shadow-xl shadow-grey-200 border-2 py-4 px-2 my-5 " placeholder="Password" />
    <button onClick={(e)=>handleLogin(e)} className="mx-auto w-[65%] text-white bg-[#0775c6] font-bold capitalize py-4 px-2 my-5 rounded-md">Login</button>
<div className="flex justify-center items-center gap-[16em]">
    <span>

    <input type="checkbox" />
    <label>Remember me</label>
    </span>
    <p className="text-[#0775c6]">Forgot password?</p>
</div>
<p className="font-bold text-lg mx-[8em] my-2">Don’t have an account?<span className="text-[#0775c6] font-normal">Signup</span> </p>
    </div>
</div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login