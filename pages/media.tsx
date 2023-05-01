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
  const embedVideoID = 'OzVOTUPnfTw';

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
        <div className="mb-10 flex justify-center items-center h-[100vh]">
          <div className="relative h-screen w-screen scale-110">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${embedVideoID}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&loop=1&end=160&playlist=${embedVideoID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      )}
      <Media />
    </Layout>
  );
};

export default MediaPage;
