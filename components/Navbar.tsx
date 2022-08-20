import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as React from "react";

const HamburgerMenu = () => (
  <div className="lg:hidden text-right mr-10 text-white text-[3rem]">
    <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
  </div>
);

const Navbar = () => (
  <div className="absolute top-0 left-0 h-20 w-[100%] z-10 bg-black opacity-20">
    <HamburgerMenu />
    <nav className="hidden lg:flex">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/Bio">
        <a>Bio</a>
      </Link>
    </nav>
  </div>
);

export default Navbar;
