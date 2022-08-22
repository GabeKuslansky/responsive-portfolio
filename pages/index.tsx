import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Gabe Kuslansky">
    <div className="w-screen h-[103vh] lg:bg-fixed bg-[url('/img/mobile/wedding-front.webp')] bg-[right_-16rem_bottom_1rem] lg:bg-center bg-cover bg-no-repeat lg:bg-[url('/img/desktop/wedding-front.jpg')]">
      <div className="flex-col box-border text-center font-letsjazz text-white m-auto leading-[3rem] pt-[6rem] lg:pt-[6rem]">
        <span className="text-3xl lg:text-5xl">Gabe Kuslansky</span>
        <br />
        <span className="text-base lg:text-xl">Jazz Pianist and Composer</span>
        <br />
        <span className="underline text-sm">Next gig 8/16 6-10pm at Chez Josephine</span>
      </div>
    </div>
    <Container>
      <p>This is a test</p>
    </Container>
  </Layout>
);

export default IndexPage;
