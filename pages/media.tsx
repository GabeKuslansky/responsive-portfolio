import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Media from '../components/Media';
import YoutubeEmbed from '../components/YoutubeEmbed';
import useDeviceDetect from '../hooks/useDeviceDetect';
const MediaPage = () => {
  const router = useRouter();
  const { isMobile } = useDeviceDetect();
  const embedVideoID='OzVOTUPnfTw';

  useEffect(() => {
    if (router.pathname === '/media') {
      document.body.style.backgroundColor = '#000';
    }

    return () => {
      document.body.style.backgroundColor = '#fff';
    };
  });

  return (
    <Layout title="Media — Gabe Kuslansky">
      {!isMobile && (
        <div className="h-[100vh]">
          <div className="opacity-75 block w-screen h-screen min-w-full min-h-full overflow-hidden bg-black pointer-events-none select-none scale-[1.25] z-[-1]">
            {/* <div className="w-screen h-screen bg-black absolute top-0 opacity-50"></div> */}
            <iframe
              className="w-screen h-screen"
              src={`https://www.youtube.com/embed/${embedVideoID}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&loop=1&end=160&playlist=${embedVideoID}`}
              frameBorder="0"
              height={560}
              width={315}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      )}
    <Media/>
    </Layout>
  );
};

export default MediaPage;
