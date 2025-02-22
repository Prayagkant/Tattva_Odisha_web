import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { ImGrin } from "react-icons/im";

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState([
    {
      id: 1,
    },
  ]);
  return (
    <div className="flex items-center justify-between py-3 font-medium border-b-2">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={assets.logo}
        alt="logo"
        className="cursor-pointer w-36"
      />
      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-base">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/products" className="flex flex-col items-center gap-1">
          <p className="text-base">PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-base">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-base">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <IoSearch size={22} className="cursor-pointer" />
        <div className="relative group">
          {user ? (
            <ImGrin size={22} className="cursor-pointer" />
          ) : (
            <CgProfile size={22} className="cursor-pointer" />
          )}

          <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
            {/* if user is not logged in then this dropdown will show log in or resister button, if user is logged in then it will show my profile, orders and logout button */}
            {!user ? (
              <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
                <p className="cursor-pointer hover:text-black">Login</p>
                <p className="cursor-pointer hover:text-black">Register</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p
                  onClick={() => setUser(null)}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

        <Link to="/cart" className="relative">
          <MdOutlineShoppingCart size={22} className="cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        {/* side bar menu for mobile screen */}
        <TbMenuDeep
          onClick={() => setVisible(true)}
          size={22}
          className="cursor-pointer sm:hidden"
        />
      </div>
      {/* Side bar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <IoIosArrowBack size={22} />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/products"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
