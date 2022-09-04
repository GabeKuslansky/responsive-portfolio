import Bio from "../components/Bio";
import Layout from "../components/Layout";

const BioPage = () => (
  <Layout title="Bio — Gabe Kuslansky - NYC Pianist">
    <div>
      <div
        className="w-screen h-[61vh] bg-cover lg:bg-fixed bg-bio-mobile lg:bg-[right_0rem_bottom_-1.3rem] bg-no-repeat lg:bg-repeat-y lg:bg-bio-desktop"
        style={{ backgroundSize: "fit" }}
      ></div>
    </div>
    <Bio />
  </Layout>
);

export default BioPage;
