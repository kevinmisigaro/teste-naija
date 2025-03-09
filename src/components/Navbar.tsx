import Link from "next/link";
import { ReactNode } from "react";
import {
  FaPizzaSlice,
  FaBook,
  FaPencil,
  FaClipboardList,
} from "react-icons/fa6";

function Navbar() {
  
  const NavOption = ({ name, icon }: { name: string; icon: ReactNode }) => (
    <div className="flex flex-col gap-y-1 align-center">
      {icon}
      <a>{name}</a>
    </div>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Link href={"/"} className="cursor-pointer">
            <img
              src="/assets/logo/logo-black.png"
              alt="logo"
              className="w-[7rem]"
            />
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="cursor-pointer">
            <img
              src="/assets/logo/logo-black.png"
              alt="logo"
              className="w-[4rem]"
            />
            </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a href="/" className="text-[#b40323] font-bold">Home</a></li>
        <li><a href="/event" className="text-[#b40323] font-bold">Event</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#b40323] border-[#b40323] text-white hover:border-[#b40323] hover:text-[#b40323]">
          Call Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;