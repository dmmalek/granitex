import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-200  flex flex-col gap-4 py-10 px-20">
        <div className="flex justify-between items-center">
          <div className="font-semibold">
            <Link href=""> ABOUT US </Link>
            <span>|</span>
            <Link href=""> CONTACT US </Link>
            <span>|</span>
            <Link href=""> CAREERS </Link>
            <span>|</span>
            <Link href=""> TERMS & PRIVACY POLICY </Link>
          </div>
          <div className="flex justify-between items-center gap-4 text-2xl ">
            <Link className="bg-[#0866FF]  footer__icon" href="#">
              <FaFacebookF />
            </Link>
            <Link href="#" className="bg-black footer__icon">
              <FaXTwitter />
            </Link>
            <Link href="#" className="bg-red-700 footer__icon">
              <FaPinterest />
            </Link>
            <Link href="#" className="bg-[#F15D65] footer__icon">
              <FaInstagram />
            </Link>
            <Link href="#" className="bg-red-700 footer__icon">
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="country">
          <h4>Country : Bangladesh</h4>
        </div>
        <div className="copyright">© 2024 - 2025 realestate.com</div>
      </div>
    </footer>
  );
};

export default Footer;
