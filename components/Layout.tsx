import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Gabe Kuslansky - NYC Pianist" }: Props) => (
  <div className="w-[100%] overflow-hidden">
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/img/favicon/site.webmanifest" />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://www.gabekuslansky.com" />
      <meta property="og:site_name" content="Gabe Kuslansky - NYC Pianist" />
      <meta property="og:url" content="https://www.gabekuslansky.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="NYC pianist for corporate events, parties, and weddings. Wide selection of jazz and pop piano music."
      />
      <meta property="og:image" content="https://www.gabekuslansky.com/img/desktop/wedding-front.webp" />
      <meta property="og:image:width" content="4000" />
      <meta property="og:image:height" content="2667" />
      <meta itemProp="name" content="Gabe Kuslansky - NYC Pianist" />
      <meta itemProp="url" content="Gabe Kuslansky - NYC Pianist" />
      <meta itemProp="description" content="Gabe Kuslansky - NYC Pianist" />
      <meta itemProp="thumbnailUrl" content="Gabe Kuslansky - NYC Pianist" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    <div>{children}</div>
    <footer>
      <hr />
    </footer>
  </div>
);

export default Layout;
