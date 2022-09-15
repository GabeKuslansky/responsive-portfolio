import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import YoutubeEmbed from '../components/YoutubeEmbed';
import useMobileDetect from 'use-mobile-detect-hook';

const MediaPage = () => {
  const detectMobile = useMobileDetect();
  const router = useRouter();
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
      {!detectMobile.isMobile() && (
        <div className="h-[100vh]">
          <div className="block w-screen h-screen min-w-full min-h-full overflow-hidden bg-black pointer-events-none select-none scale-[1.25]">
            {/* <div className="w-screen h-screen bg-black absolute top-0 opacity-50"></div> */}
            <iframe
              className="w-screen h-screen"
              src={`https://www.youtube.com/embed/cqBiocs8Wvc?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&loop=1&end=160&playlist=cqBiocs8Wvc`}
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
      <Container>
        <h1 className="text-center font-work text-3xl mt-10 mb-10">Videos</h1>
        <div className="lg:flex justify-center">
          <YoutubeEmbed embedId="1BGAuazIHWE" />
          <YoutubeEmbed embedId="cqBiocs8Wvc" />
          <YoutubeEmbed embedId="ArzFeE2v0bg" />
        </div>
      </Container>
    </Layout>
  );
};

export default MediaPage;
