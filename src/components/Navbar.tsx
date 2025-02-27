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
          <li>
            <NavOption icon={<FaPizzaSlice />} name="Kitchen" />
          </li>
          <li>
            <NavOption icon={<FaClipboardList />} name="Teste" />
          </li>
          <li>
            <NavOption icon={<FaBook />} name="Recipies" />
          </li>
          <li>
            <NavOption icon={<FaPencil />} name="Blog" />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#FF6624] border-[#FF6624] text-white hover:border-[#FF6624] hover:text-[#FF6624]">
          Call Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;