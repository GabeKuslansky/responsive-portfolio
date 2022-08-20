import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as React from "react";

const HamburgerMenu = () => (
  <div className="cursor-pointer md:hidden left-1 top-1 p-1 font-lg text-white text-xl z-10">
    <FontAwesomeIcon icon={faBars} />
  </div>
);

const Navbar = () => (
  <div className="absolute top-0 left-0 h-10 w-screen">
    <HamburgerMenu />
    <nav className="hidden md:flex">
      <Link href="/">
        <a>Home</a>
      </Link>
      {""}
      <Link href="/Bio">
        <a>Bio</a>
      </Link>
    </nav>
  </div>
);

export default Navbar;
