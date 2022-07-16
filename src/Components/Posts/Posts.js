import PostHeader from "./PostHeader";
import PostImageAction from "./PostImage&Actions";
import PostLikes from "./PostLikes";
import PostVideo from "./PostVideo";

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
      content: "videos/video.mp4",
      content_ogv: "videos/video.ogv",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
    },
  ];

  return (
    <div className="posts">
      {postsBox.map((value) => (
        <div className="post">
          <PostHeader user={value.user} />

          <PostImageAction content={value.content} />
          <div className="fundo">
            <PostLikes
              likeimg={value.likeimg}
              likeuser={value.likeuser}
              likescount={value.likescount}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
