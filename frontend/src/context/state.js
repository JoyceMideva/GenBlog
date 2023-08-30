"use client"
import Signup from "@/app/signup/page";
import { createContext, useContext, useState } from "react";

export const StateContext = createContext();
function State({children}) {
    const [isLogin,setIsLogin] = useState({
      is_loggedin:localStorage.getItem("access_token")?true:false,
        username:"",
        email:"",
    });
    const [currentUser, setCurrentUser] = useState({});

    return (
        <StateContext.Provider
          value={{
            isLogin,setIsLogin,
            currentUser,setCurrentUser
          }}
        >
          {children}
        </StateContext.Provider>
      );
}
export default State