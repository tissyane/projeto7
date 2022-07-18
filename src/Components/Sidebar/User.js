function UserContainer(props) {
  return (
    <div className="usuario">
      <img src={props.img} alt={`Imagem de ${props.user}`} />
      <div className="texto">
        <strong>{props.user}</strong>
        {props.username}
      </div>
    </div>
  );
}

export default function User() {
  return (
    <UserContainer
      img="assets/img/catanacomics.svg"
      user="catanacomics"
      username="Catana"
    />
  );
}
