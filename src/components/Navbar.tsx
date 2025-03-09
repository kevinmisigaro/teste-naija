import Link from "next/link";

function Navbar() {

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
        <Link href={"/"} className="cursor-pointe hidden md:block">
            <img
              src="/assets/logo/logo-black.png"
              alt="logo"
              className="w-[4rem]"
            />
            </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><Link href="/" className="text-[#b40323] font-bold">Home</Link></li>
        <li><Link href="/event" className="text-[#b40323] font-bold">Event</Link></li>
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