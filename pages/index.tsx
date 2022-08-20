import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Gabe Kuslansky">
    <div className="w-screen h-screen lg:bg-fixed scale-[1.5] bg-auto bg-[right_-15rem_bottom_-5rem] lg:scale-[1] lg:bg-center bg-no-repeat lg:bg-cover bg-[url('/img/desktop/wedding-front.jpg')]"></div>
    <Container>
      <p>This is a test</p>
    </Container>
  </Layout>
);

export default IndexPage;
