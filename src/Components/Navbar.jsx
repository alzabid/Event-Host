import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/contact" },
    { name: "About us", link: "/about" },
    { name: "Contacts", link: "/dashboard/profile" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="max-w-7xl lg:mx-auto md:mx-10 mx-2 sticky z-20 top-0 md:relative bg-gradient-to-r from-violet-600 to-violet-300 rounded-2xl mt-3 md:mt-5 px-3 md:px-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* logo */}
        <button className="">
          <img src="/icon/logo.png" alt="EventHost" />
        </button>

        <img
          className="invisible md:visible absolute md:left-[160px] lg:left-52"
          src="https://i.ibb.co/RjxwBn4/Group-2.png"
          alt=""
        />

        {/* Navlinks */}

        <ul
          className={`md:flex md:items-center absolute md:static bg-gray-700 md:bg-transparent left-0 w-full md:w-auto md:pl-0 pl-9 rounded-2xl transition-all duration-500 ease-in  ${
            open ? "top-[75px] left-0 " : "top-[75px] left-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-green-500 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <img
          className=" invisible md:visible absolute md:right-[120px] lg:right-52"
          src="https://i.ibb.co/RjxwBn4/Group-2.png"
          alt=""
        />

        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <button className="w-8">
            <img src="/icon/cart.png" alt="cart" />
          </button>
        </div>

        {/* open or close icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-xl cursor-pointer md:hidden"
        >
          {open ? <CgMenuMotion /> : <RiMenuAddLine />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
