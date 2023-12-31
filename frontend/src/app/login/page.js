"use client";
import Footer from "@/components/Footer";
import axios from "axios";
import Nav from "@/components/Nav";
import profile from "../../../public/images/gender.png";
import Image from "next/image";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { StateContext } from "@/context/state";
import Link from "next/link";

function Login() {
  const { isLogin, setIsLogin } = useContext(StateContext);

  const router = useRouter();
  const loginUrl = "http://127.0.0.1:8000/api/token/";

  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  function handleLogin(e) {
    e.preventDefault(e);
    console.log(user);

    axios
      .post(loginUrl, {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        localStorage.setItem("refresh_token", response.data.refresh);
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("username", response.data.username);
        console.log(response);

        if (response.status === 200) {
          isLogin.is_loggedin = true;

           router.push('/')
        }
      });
  }

  return (
    <div>
      <Nav />
      <div className="bg-[#0775C6] h-[80vh]">
        <h2 className="text-white text-3xl font-bold text-center ">
          LOGIN TO YOUR ACCOUNT
        </h2>
        <div className="bg-white w-[40vw] h-[60vh] my-[6em] mx-auto flex flex-col rounded-lg ">
          <div className="flex justify-center items-center my-[-5em]">
            <Image
              width={150}
              height={150}
              src={profile}
              className="bg-gray-300 rounded-[50%]"
            />
          </div>
          <div className="my-[3em] w-[40vw] h-[60vh] mx-auto flex flex-col rounded-lg">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              className="w-[65%] outline-none mx-auto shadow-[0_0_5px_lightgray]  py-4 px-2 mt-[5em] "
              placeholder="Username"
            />
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              name="password"
              className="w-[65%] outline-none  mx-auto shadow-[0_0_5px_lightgray] py-4 px-2 my-5 "
              placeholder="Password"
            />
            <button
              onClick={(e) => handleLogin(e)}
              className="mx-auto w-[65%] text-white bg-[#0775c6] font-bold capitalize py-4 px-2 my-5 rounded-md"
            >
              Login
            </button>
            <div className="flex justify-center items-center gap-[16em]">
              <span>
                <input type="checkbox" />
                <label>Remember me</label>
              </span>
              <p className="text-[#0775c6]">Forgot password?</p>
            </div>
            <p className="font-bold text-lg mx-[8em] my-2">
              Don’t have an account?  
                   <Link href={`/signup`}>  <span className="text-[#0775c6] font-normal">Signup</span></Link> 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
