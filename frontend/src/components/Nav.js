"use client";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import { StateContext } from "@/context/state";
import { useContext, useEffect } from "react";

function Nav() {
  const { isLogin, setIsLogin } = useContext(StateContext);
  useEffect(() => {

  }, []);
  return (
    <div className="container mx-auto  flex justify-between items-center py-4 capitalize">
      <div>
        <Image src={logo} width={100} height={100} />
      </div>

      <div className="flex justify-between items-center">
        <ul className="flex justify-between gap-10 items-center text-2xl">
          <Link href={`/`}>
            {" "}
            <li>Home</li>
          </Link>

          {isLogin.is_loggedin ? (
            <div className="flex justify-between items-center gap-10">
              <Link href={`/new-blog`}>
                <li>Write a blog</li>
              </Link>

              <Link href={`/profile`}>
                <li>My profile</li>
              </Link>
              <Link href={``}>
                {" "}
                <li>
                  <button className="border-2 text-white bg-[#0775C6] py-2 px-10  rounded-md">
                    Logout
                  </button>
                </li>
              </Link>
            </div>
          ) : (
            <div className="flex justify-between items-center gap-10">
              <Link href={`/login`}>
                <li>Write a blog</li>
              </Link>

              <Link href={`/login`}>
                <li>
                  <button className="border-2 text-[#0775C6] shadow-xl w-[100%] shadow-grey-200  py-2 px-10  rounded-md">
                    Login
                  </button>
                </li>
              </Link>
              <Link href={`/signup`}>
                {" "}
                <li>
                  <button className="border-2 text-white bg-[#0775C6] py-2 px-10  rounded-md">
                    Sign up
                  </button>
                </li>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Nav;
