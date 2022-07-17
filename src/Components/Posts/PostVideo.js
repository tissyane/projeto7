export default function PostVideo(props) {
  return (
    <div className="conteudo">
      <video autoPlay muted controls>
        <source
          src={`assets/video/${props.video}.mp4`}
          alt="Vídeo do post"
          type="video/mp4"
        />
        <source
          src={`assets/video/${props.video}.ogv`}
          alt="Vídeo do post"
          type="video/ogv"
        />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
}
