import Bio from "../components/Bio";
import Layout from "../components/Layout";

const BioPage = () => (
  <Layout title="Bio — Gabe Kuslansky - NYC Pianist">
    <div>
      <div
        className="w-screen h-[50vh] bg-cover lg:bg-fixed bg-bio-mobile lg:bg-[right_0rem_bottom_-1.3rem] bg-no-repeat lg:bg-repeat-y lg:bg-bio-desktop"
        style={{ backgroundSize: "fit" }}
      > <div className="flex-col box-border text-center font-letsjazz text-white m-auto leading-[3rem] pt-[8.5rem]">
      <span className="text-3xl lg:text-6xl tracking-[0.2em]">Bio</span>
    </div></div>
    </div>
    <div className="h-[50vh]">
    <Bio />
    </div>
  </Layout>
);

export default BioPage;
