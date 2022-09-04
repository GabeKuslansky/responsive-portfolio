type Props = {
  embedId: string;
};

const YoutubeEmbed = ({ embedId }: Props) => {
  return (
    <div className="video-responsive pb-5 lg:p-5">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
