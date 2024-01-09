import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#004274]">
      <div className="container h-16 flex  justify-between items-center  text-white">
        <div className="">
          <Link href="/">
            <h2 className="flex justify-between items-center text-2xl ">
              Real Estate
            </h2>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-10 sm:text-lg">
          <div
            className={`${
              menuOpen ? "block" : "hidden sm:block"
            } absolute w-full sm:w-auto top-16 p-4 left-0 right-0 text-black text-lg sm:text-white bg-white sm:bg-transparent sm:relative sm:top-0`}
          >
            <ul className="grid text-2xl sm:text-lg sm:flex sm:justify-between sm:gap-5 flex-wrap">
              <li
                className="border sm:border-0 border-[#eaeaea]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="border sm:border-0 border-[#eaeaea]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Link href="/property">Property</Link>
              </li>
              <li
                className="border sm:border-0 border-[#eaeaea]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Link href="/about">About</Link>
              </li>

              <li
                className="border sm:border-0 border-[#eaeaea]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="flex justify-between items-center gap-4">
              <li>
                <Link href="#">
                  Call Us:{" "}
                  <span className="underline text-decoration-dotted">
                    +880 15123456
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="sm:hidden cursor-pointer  w-10 h-10 bg-blue-500 text-2xl flex items-center justify-center text-white "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
