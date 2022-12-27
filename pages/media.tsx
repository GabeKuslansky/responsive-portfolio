import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import YoutubeEmbed from '../components/YoutubeEmbed';
import useDeviceDetect from '../hooks/useDeviceDetect';
const MediaPage = () => {
  const router = useRouter();
  const { isMobile } = useDeviceDetect();
  const youtubeIds: string[] = ['1BGAuazIHWE', 'cqBiocs8Wvc', 'ArzFeE2v0bg'];
  const backgroundMedia = 'Sj_GLsVhMhY';
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
        <div className="flex items-start w-screen h-screen min-w-full min-h-full bg-black select-none scale-[1.25] z-[-1]">
          <iframe
            className="pointer-events-none w-screen h-[100vh]"
            src={`https://www.youtube.com/embed/${backgroundMedia}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&loop=1&end=160&playlist=${backgroundMedia}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
      <Container>
        <h1 className="text-center font-work text-3xl mt-10">Videos</h1>
        <div className="mb-20 w-screen justify-center flex flex-wrap">
          {youtubeIds.map((ytId, idx) => {
            return (
              idx % 2 === 0 && (
                <>
                  <YoutubeEmbed embedId={ytId} />
                  {youtubeIds[idx + 1] !== undefined && (
                    <YoutubeEmbed embedId={youtubeIds[idx + 1]} />
                  )}
                </>
              )
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default MediaPage;
