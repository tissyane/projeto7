export default function PostHeader(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img
          src={`assets/img/${props.user}.svg`}
          alt={`Imagem de ${props.user}`}
        />
        {props.user}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
