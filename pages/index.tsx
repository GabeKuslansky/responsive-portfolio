import Bio from '../components/Bio';
import Booking from '../components/Booking';
import Gigs from '../components/Gigs';
import Layout from '../components/Layout';
import Media from '../components/Media';
import YoutubeEmbed from '../components/YoutubeEmbed';

const IndexPage = () => (
  <Layout title="Gabe Kuslansky - NYC Pianist">
    <div
      className="w-screen h-[103vh] lg:bg-fixed bg-index-mobile bg-[right_-16rem_bottom_0.3rem] lg:bg-center bg-cover bg-repeat-x lg:bg-index-desktop"
      style={{ backgroundSize: 'fit' }}
    >
      <div className="flex-col box-border text-center font-letsjazz text-white m-auto leading-[3rem] pt-[8.5rem]">
        <span className="text-3xl lg:text-6xl tracking-[0.2em]">
          Gabe Kuslansky
        </span>
        <br />
        <span className="text-sm lg:text-xl tracking-[0.05em] lg:leading-[3em]">
          Pianist and Composer
        </span>

        {/* <span className="text-sm lg:text-xl">Next gig 8/16 6-10pm at Chez Josephine</span> */}
      </div>
    </div>

<Media/>
    <Bio/>
    <Gigs/>
    <Booking/>
  </Layout>
);

export default IndexPage;
