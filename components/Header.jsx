import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState(false);
  const handleClick = () => setHeader(!header);

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      {/*  */}
      {/* Menu */}
      {/* 2xl goes from sm md lg xl 2xl size of screen */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        Header
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        {/* Hamburger Menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!header ? <AiOutlineMenu size={25} /> : <AiOutlineClose />}
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-screen bg-black/70">
        {/* Mobile Menu */}
        <div className="fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              Img HEader
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Letzs Build something together!!!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm ">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm ">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm ">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm ">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm ">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Letzs Connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/abhiram11"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/abhiram11"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/abhiram11"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/abhiram11"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/abhiram11"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
