import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";

const MediaPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/media") {
      document.body.style.backgroundColor = "#000";
    }

    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  });

  return (
    <Layout title="Media — Gabe Kuslansky">
      <div className="relative bg-black video-responsive pointer-events-none select-none scale-[1.12]">
        <div className="bg-black absolute top-0"></div>
        <iframe
          className="w-screen h-screen index-desktop"
          src={`https://www.youtube.com/embed/cqBiocs8Wvc?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&loop=1&end=160&playlist=cqBiocs8Wvc`}
          frameBorder="0"
          height={560}
          width={315}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="w-screen lg:w-[40%] m-auto">
        <div className="90% text-md m-auto break-words tracking-wide p-10"></div>
      </div>
      {/* <div
      className="w-screen h-[103vh] lg:bg-fixed bg-index-mobile bg-[right_-16rem_bottom_0.3rem] lg:bg-center bg-cover bg-repeat-x lg:bg-index-desktop"
      style={{ backgroundSize: "fit" }}
    >

    </div> */}
    </Layout>
  );
};

export default MediaPage;
