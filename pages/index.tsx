import Link from "next/link";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import StyledLink from "../components/StyledLink";

const IndexPage = () => (
  <Layout title="Gabe Kuslansky">
    <div
      className="w-screen h-[103vh] lg:bg-fixed bg-darken-mobile bg-[right_-16rem_bottom_0.3rem] lg:bg-center bg-cover bg-repeat-x lg:bg-darken-desktop"
      style={{ backgroundSize: "fit" }}
    >
      <div className="flex-col box-border text-center font-letsjazz text-white m-auto leading-[3rem] pt-[6rem] lg:pt-[9rem]">
        <span className="text-3xl lg:text-6xl tracking-[0.2em]">Gabe Kuslansky</span>
        <br />
        <span className="text-base lg:text-lg tracking-[0.05em] lg:leading-[3em]">Jazz Pianist and Composer</span>
        <br />
        {/* <span className="text-sm lg:text-xl">Next gig 8/16 6-10pm at Chez Josephine</span> */}
      </div>
    </div>

    <Bio></Bio>
  </Layout>
);

export default IndexPage;
