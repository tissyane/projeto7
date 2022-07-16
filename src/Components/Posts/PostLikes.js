export default function PostLikes(props) {
  return (
    <div className="curtidas">
      <img src={props.likeimg} alt={`Imagem de ${props.likeuser}`} />
      <div className="texto">
        Curtido por <strong>{props.likeuser}</strong> e{" "}
        <strong>outras {props.likescount} pessoas</strong>
      </div>
    </div>
  );
}
