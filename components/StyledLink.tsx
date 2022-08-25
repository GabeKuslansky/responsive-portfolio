import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: String;
  children?: ReactNode;
};

const StyledLink = ({ href, children }: Props) => (
  <Link href={href.toString()}>
    <a className="underline text-[#a8a6a1]">{children}</a>
  </Link>
);

export default StyledLink;
