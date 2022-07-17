import Post from "./Post";

export default function Posts() {
  const postsBox = [
    {
      user: "meowed",
      content: "assets/img/gato-telefone.svg",
      likeimg: "assets/img/respondeai.svg",
      likeuser: "respondeai",
      likescount: "101.523",
      isVideo: false,
      userComment: "Paulinha",
      commentText: "Gato e conectado 😻",
      commentsCount: "80.689",
    },
    {
      user: "adorable_animals",
      video: "video",
      likeimg: "assets/img/smallcutecats.svg",
      likeuser: "smallcutecats",
      likescount: "9.203",
      isVideo: true,
      userComment: "Victor",
      commentText: "Mais corajosos que a Paulinha",
      commentsCount: "7.689",
    },
    {
      user: "rami",
      content: "assets/img/Sidarta.svg",
      likeimg: "assets/img/razoesparaacreditar.svg",
      likeuser: "razoesparaacreditar",
      likescount: "12.069",
      isVideo: false,
      userComment: "tissyanemara",
      commentText: "O painel mais maravilhoso do mundo 👏👏",
      commentsCount: "4.632",
    },
    {
      user: "barked",
      content: "assets/img/dog.svg",
      likeimg: "assets/img/meowed.svg",
      likeuser: "meowed",
      likescount: "2.897",
      isVideo: false,
      userComment: "adorables_animals",
      commentText: "Oiiinn que vontade de apertar",
      commentsCount: "1.241",
    },
  ];

  return (
    <div className="posts">
      {postsBox.map((value) => (
        <Post {...value} />
      ))}
    </div>
  );
}
