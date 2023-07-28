"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineSubject } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center  p-5">
        <div>
          <Link className="flex items-center gap-2 leading-none" href="#">
            <MdOutlineSubject className="text-2xl lg:text-5xl bg-[#047756] text-white rounded-md" />
            <label className="font-black text-xl lg:text-3xl text-[#05B381]">
              PostForm
            </label>
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5 lg:gap-10 text-lg  text-blue-darker">
            <li className="hover:underline">
              <Link href="#">See what&apos;s new! 🎉</Link>
            </li>
            <li className="hover:underline">
              <Link href="/login">Forms</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Integrations</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Account</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Docs</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Log out</Link>
            </li>
          </ul>
        </nav>
        <div className="humburger-nav md:hidden">
          <a
            href="#"
            onClick={() => {
              setShowMediaIcon(!showMediaIcon);
              console.log(showMediaIcon);
            }}
          >
            <GiHamburgerMenu className="icon-humburger text-4xl text-[#047756] " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
