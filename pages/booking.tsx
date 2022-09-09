import Booking from '../components/Booking';
import Layout from '../components/Layout';

const GigsPage = () => (
  <Layout title="Booking — Gabe Kuslansky - NYC Pianist">
    <div className="h-screen">
      <div
        className="w-screen h-[50vh] bg-cover lg:bg-fixed bg-gigs-mobile lg:bg-[right_0rem_bottom_0rem] bg-no-repeat lg:bg-repeat-y lg:bg-gigs-desktop"
        style={{ backgroundSize: 'fit' }}
      >
        <div className="flex-col box-border text-center font-letsjazz text-white m-auto leading-[3rem] pt-[8.5rem]">
          <span className="text-3xl lg:text-6xl tracking-[0.2em]">Booking</span>
        </div>
      </div>
      <div className="h-[20vh] m-auto justify-center">
        <Booking />
      </div>
    </div>
  </Layout>
);

export default GigsPage;
