function SuggestionsContainer(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Suggestions() {
  const suggestionsBox = [
    {
      img: "assets/img/bad.vibes.memes.svg",
      username: "bad.vibes.memes",
      razao: "Segue você",
    },

    {
      img: "assets/img/chibirdart.svg",
      username: "chibirdart",
      razao: "Segue você",
    },
    {
      img: "assets/img/razoesparaacreditar.svg",
      username: "razoesparaacreditar",
      razao: "Segue você",
    },
    {
      img: "assets/img/adorable_animals.svg",
      username: "adorable_animals",
      razao: "Novo no Instagram",
    },
    {
      img: "assets/img/smallcutecats.svg",
      username: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div>
      {suggestionsBox.map((value) => (
        <SuggestionsContainer
          img={value.img}
          username={value.username}
          razao={value.razao}
        />
      ))}
    </div>
  );
}
