import Bio from '../components/Bio';
import Gigs from '../components/Gigs';
import Layout from '../components/Layout';
import HttpService from '../utils/httpService';

// export async function getStaticProps() {
//   const gigCalendarID =
//     'MXBvZDBnMWIxM2Z1Y2MwM3Qza3UzN3U1ZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
//   const gigs = await HttpService.get(
//     `https://www.googleapis.com/calendar/v3/calendars/${gigCalendarID}/events`
//   );
// //   console.log(gigs);
//   return {
//     props: { gigs: [] },
//   };
// }

const GigsPage = () => (
  <Layout title="Gigs — Gabe Kuslansky - NYC Pianist">
    <div className="h-screen">
      <div
        className="w-screen h-[50vh] bg-cover lg:bg-fixed bg-gigs-mobile lg:bg-[right_0rem_bottom_0rem] bg-no-repeat lg:bg-repeat-y lg:bg-gigs-desktop"
        style={{ backgroundSize: 'fit' }}
      >
        <div className="flex-col box-border text-center font-letsjazz text-white m-auto leading-[3rem] pt-[8.5rem]">
          <span className="text-3xl lg:text-6xl tracking-[0.2em]">Gigs</span>
        </div>
      </div>
      <div className="h-[20vh] m-auto justify-center">
        <Gigs />
      </div>
    </div>
  </Layout>
);

export default GigsPage;
