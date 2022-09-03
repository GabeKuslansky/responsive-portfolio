import Link from "next/link";

const HamburgerLinks = () => {
  return (
    <div className="lg:hidden w-screen h-screen absolute top-0 left-0 min-h-full flex bg-[rgba(0,0,0,.9)] z-0">
      <div className="flex font-letsjazz leading-[6rem] box-border relative justify-center flex-col flex-shrink-0 flex-grow text-4xl text-center text-white">
        <Link href="/">
          <a>
            <span>home</span>
          </a>
        </Link>
        <Link href="/bio">
          <a>
            <span>bio</span>
          </a>
        </Link>
        <Link href="/media">
          <a>
            <span>media</span>
          </a>
        </Link>
        <Link href="/gigs">
          <a>
            <span>gigs</span>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <span>contact</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default HamburgerLinks;
