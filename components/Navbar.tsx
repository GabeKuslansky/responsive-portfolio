import Link from "next/link";
import * as React from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => (
  <div className="absolute top-0 left-0 h-20 w-[100%] z-10 bg-[rgba(0,0,0,0.2)]">
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
