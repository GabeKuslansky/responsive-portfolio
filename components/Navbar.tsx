import Link from "next/link";
import * as React from "react";
import HamburgerLinks from "./HamburgerMenu/HamburgerLinks";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className="absolute top-0 left-0 h-15 w-[100%] z-10 bg-[rgba(0,0,0,0.2)]">
        <nav className="flex">
          <div className="z-20 p-5 text-2xl text-white">
            <Link href="/">
              <a>Gabe Kuslansky</a>
            </Link>
          </div>
          <div className="justify-center hidden lg:flex m-auto text-center space-x-10 text-2xl text-white">
            <Link href="/gigs">
              <a>Gigs</a>
            </Link>
            <Link href="/bio">
              <a>Bio</a>
            </Link>
            <Link href="/media">
              <a>Media</a>
            </Link>
            <Link href="/booking">
              <a>Booking</a>
            </Link>
          </div>
          <div className="lg:hidden p-3 ml-auto mr-4">
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
