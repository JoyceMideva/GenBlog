"use client"

import { StateContext } from "@/context/state";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const { default: Footer } = require("@/components/Footer");
const { default: Nav } = require("@/components/Nav");

function Logout(){
    const { isLogin, setIsLogin } = useContext(StateContext);
const router=useRouter()
function handleLogout(){
localStorage.clear()
setIsLogin({
    is_loggedin:false,
    username:"",
    email:"",
})
router.push('/') 
}
function handleCancel(){
    
    router.push('/') 
    }


    return(
        <div className="flex flex-col h-[100vh]">
            <Nav className="flex-1"/>
            <div className="flex-1">
                <p className="text-3xl text-center font-bold">Do you want 😒💔to log out😒😒</p>
                <div className="flex items-center justify-center gap-5 my-4">
  <button onClick={(e)=>handleLogout(e)}  className="border-2 text-[white] shadow-xl w-[15%] bg-[red] shadow-grey-200  py-2 px-10  rounded-md">LOGOUT</button>
  <button onClick={(e)=>handleCancel(e)} className="border-2 border-[#0775C6] text-[#0775C6] shadow-xl w-[15%] shadow-grey-200  py-2 px-10  rounded-md">CANCEL</button>
</div>
            </div>
            <Footer className="flex-1"/>
        </div>
    )
}
export default Logout