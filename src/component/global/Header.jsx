import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#004274]">
      <div className="container h-16 flex  justify-between items-center  text-white">
        <div className="">
          <h2 className="flex justify-between items-center text-2xl ">
            Real Estate
          </h2>
        </div>

        <div className="flex justify-between items-center gap-10 text-lg">
          <div className="header__menu_list">
            <ul className="flex justify-between gap-5">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Property</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
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
              <li>{/* <button className="btn">Sign In</button> */}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
