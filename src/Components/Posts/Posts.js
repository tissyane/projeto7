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
      commentsCount: "1.689",
    },
    {
      user: "barked",
      content: "assets/img/dog.svg",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
      isVideo: false,
      userComment: "adorables_animals",
      commentText: "Oiiinn que vontade de apertar",
      commentsCount: "3.241",
    },
    {
      user: "barked",
      video: "video",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
      isVideo: true,
      userComment: "Victor",
      commentText: "Mais corajosos que a Paulinha",
      commentsCount: "7.689",
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
