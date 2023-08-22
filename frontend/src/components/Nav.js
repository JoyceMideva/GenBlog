import logo from "../../public/images/logo.svg";
import Image from "next/image";

function Nav() {
  return (
    <div className="container mx-auto  flex justify-between items-center py-4 capitalize">
        <div>

          <Image  src={logo} width={100} height={100}  />
        </div>
        
        <div className="flex justify-between items-center">
      <ul className="flex justify-between gap-10 items-center text-2xl">
          <li>Home</li>
          <li>Featured posts</li>
          <li>
          <button className="border-2 text-[#0775C6] shadow-xl w-[100%] shadow-grey-200  py-2 px-10  rounded-md">
                Login
              </button>
          </li>
          <li>
          <button className="border-2 text-white bg-[#0775C6] py-2 px-10  rounded-md">
                Sign up
              </button>
          </li>
      </ul>
        </div>
    </div>
  );
}
export default Nav;
