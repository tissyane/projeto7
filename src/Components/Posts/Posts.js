import Post from "./PostGlobal";

export default function Posts() {
  const postsBox = [
    {
      user: "meowed",
      content: "assets/img/gato-telefone.svg",
      likeimg: "assets/img/respondeai.svg",
      likeuser: "respondeai",
      likescount: "101.523",
      isVideo: false,
    },
    {
      user: "barked",
      content: "assets/img/dog.svg",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
      isVideo: false,
    },
    {
      user: "barked",
      video: "video",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
      isVideo: true,
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
