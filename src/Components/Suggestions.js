function SuggestionsContainer(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img
          src={`assets/img/${props.user}.svg`}
          alt={`Imagem de ${props.user}`}
        />
        <div className="texto">
          <div className="nome">{props.user}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}

export default function Suggestions() {
  const suggestionsBox = [
    {
      user: "bad.vibes.memes",
      razao: "Segue você",
    },

    {
      user: "chibirdart",
      razao: "Segue você",
    },
    {
      user: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      user: "adorable_animals",
      razao: "Segue você",
    },
    {
      user: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div>
      {suggestionsBox.map((value) => (
        <SuggestionsContainer {...value} />
      ))}
    </div>
  );
}
