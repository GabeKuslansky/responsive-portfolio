import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Gabe Kuslansky">
    <div className="w-screen h-[103vh] lg:bg-fixed bg-[url('/img/mobile/wedding-front.webp')] bg-[right_-16rem_bottom_1rem] lg:bg-center bg-cover bg-no-repeat lg:bg-[url('/img/desktop/wedding-front.jpg')]"></div>
    <Container>
      <p>This is a test</p>
    </Container>
  </Layout>
);

export default IndexPage;
