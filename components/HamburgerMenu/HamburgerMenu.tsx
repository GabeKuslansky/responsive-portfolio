import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HamburgerLinks from "./HamburgerLinks";

type Props = {
  openChange: (arg0: boolean) => void;
};

const HamburgerMenu = ({ openChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="text-white text-5xl z-20">
        <FontAwesomeIcon
          onClick={(e) => {
            openChange(!isOpen);
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer"
          icon={isOpen ? faX : faBars}
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
