import Link from "next/link";
import * as React from "react";
import HamburgerLinks from "./HamburgerMenu/HamburgerLinks";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className={`absolute top-0 left-0 h-[3.5rem] w-[100%] z-10`}>
        <nav className="flex leading-[3.5rem]">
          <div className={`z-20 pl-2 text-md font-letsjazz text-white pt-[4rem]`}></div>
          <div className="justify-center hidden lg:flex m-auto text-right space-x-8 text-[1.3rem] text-white">
            <Link href="/">
              <a>home</a>
            </Link>
            <Link href="/gigs">
              <a>gigs</a>
            </Link>
            <Link href="/bio">
              <a>bio</a>
            </Link>
            <Link href="/media">
              <a>media</a>
            </Link>
            <Link href="/booking">
              <a>booking</a>
            </Link>
          </div>
          <div className={`lg:hidden ml-auto mr-4`}>
            <HamburgerMenu
              openChange={(isOpen) => {
                isOpen
                  ? document.body.classList.add("overflow-hidden")
                  : document.body.classList.remove("overflow-hidden");
                setIsOpen(isOpen);
              }}
            />
          </div>
        </nav>
      </div>
      {isOpen && HamburgerLinks()}
    </div>
  );
};

export default Navbar;
