import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Gabe Kuslansky">
    <div className="w-screen h-screen bg-fixed bg-auto bg-[right_-13rem_bottom_rem] md:bg-center bg-no-repeat md:bg-cover bg-[url('/img/desktop/wedding-front.jpg')]"></div>
    <Container>
      <p>This is a test</p>
    </Container>
  </Layout>
);

export default IndexPage;
