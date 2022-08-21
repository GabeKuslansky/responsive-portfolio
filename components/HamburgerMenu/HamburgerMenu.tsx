import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HamburgerLinks from "./HamburgerLinks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="lg:hidden text-right mr-8 text-white text-[3rem] z-20 relative">
        <FontAwesomeIcon
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer"
          icon={isOpen ? faX : faBars}
        />
      </div>
      {isOpen && HamburgerLinks()}
    </div>
  );
};

export default HamburgerMenu;
