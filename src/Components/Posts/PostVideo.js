export default function PostVideo(props) {
  return (
    <div className="conteudo">
      <video autoplay="" muted="" controls="">
        <source
          src={props.videocontent}
          alt="Vídeo do post"
          type="video/mp4"
        ></source>
        <source src={props.content_ogv} alt="Vídeo do post" type="video/mp4">
          Seu navegador não suporta vídeos.
        </source>
      </video>
    </div>
  );
}
