import Container from "./Container";
import YoutubeEmbed from "./YoutubeEmbed";
const youtubeIds: string[] = ['Sj_GLsVhMhY','OzVOTUPnfTw', 'cqBiocs8Wvc', 'ArzFeE2v0bg'];

const Media = () => <Container>
  <div className="mb-10 w-screen justify-center flex flex-wrap">
    {youtubeIds.map((ytId, idx) => {
      return (
        idx % 2 === 0 && (
          <div className="">
            <YoutubeEmbed embedId={ytId} />
            {youtubeIds[idx + 1] !== undefined && (
              <YoutubeEmbed embedId={youtubeIds[idx + 1]} />
            )}
          </div>
        )
      );
    })}
  </div>
</Container>

export default Media;
