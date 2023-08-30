'use client'
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import profile from "../../../public/images/gender.png";
import Image from "next/image";
import axios from "axios";
import { useContext, useState } from "react";
import { StateContext } from "@/context/state";
import { useRouter } from "next/navigation";
function Signup() {
  const { currentUser, setCurrentUser } = useContext(StateContext);
const router=useRouter()
  const signupUrl = "http://127.0.0.1:8000/api/user/create/";

  const [userForm, setUserForm] = useState([])
  const handleChange = (e) => {

    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
    function handleSignup(e) {
      e.preventDefault(e)
      console.log(userForm)

      axios.post(signupUrl,{
        username:userForm.username,
        email:userForm.email,
        password:userForm.password,
      })
  .then((response) => {
    console.log(response);
});
router.push('/login')
    }
    

  return (
    <div>
      <Nav />
      <div className="bg-[#0775C6] h-[120vh] flex justify-center items-center flex-col">
        <h2 className="text-white text-3xl font-bold text-center mt-[2em] ">
          CREATE YOUR ACCOUNT
        </h2>
        <div className="bg-white w-[40vw] h-[100vh] my-[6em] mx-auto flex flex-col rounded-lg ">
          <div className="flex justify-center items-center my-[-5em]">
 <Image width={150} height={150} src={profile}  className="bg-gray-300 rounded-[50%]" />
    </div>
          <div className="my-[3em] w-[40vw] h-[60vh] mx-auto flex flex-col rounded-lg">
            <input
            onChange={(e)=>handleChange(e)}
              type="text"
              className="w-[65%] outline-none mx-auto shadow-xl shadow-grey-200 border-2   py-4 px-2 mt-[5em] "
              placeholder="Username"
              name="username"
            />
            <input
            onChange={(e)=>handleChange(e)}
              type="email"
              className="w-[65%] outline-none mx-auto shadow-xl shadow-grey-200 border-2   py-4 px-2 my-5 "
              placeholder="Email Address"
              name="email"
            />
            <input
            onChange={(e)=>handleChange(e)}
              type="password"
              className="w-[65%] outline-none  mx-auto shadow-xl shadow-grey-200 border-2 py-4 px-2 my-5 "
              placeholder="Password"
              name="password"
            />
            
            
            <button onClick={(e)=>handleSignup(e)} className="mx-auto w-[65%] text-white bg-[#0775c6] font-bold capitalize py-4 px-2 my-5 rounded-md">
              Signup
            </button>
            <p className="font-bold text-lg  text-center py-5">
              Have an account?
              <span className="text-[#0775c6] font-normal">login</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Signup;
