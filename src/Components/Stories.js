function StoriesContainer(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img
          src={`assets/img/${props.user}.svg`}
          alt={`Imagem de ${props.user}`}
        />
      </div>
      <div className="usuario">{props.user}</div>
    </div>
  );
}

export default function Stories() {
  const storiesBox = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];

  return (
    <div className="stories">
      {storiesBox.map((username) => (
        <StoriesContainer user={username} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
