function UserContainer(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
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
