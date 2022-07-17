import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";
import PostVideo from "./PostVideo";
import React from "react";

export default function Post(props) {
  const [heart, setHeart] = React.useState("heart-outline");

  return (
    <div className="post">
      <PostHeader {...props} />
      {props.isVideo ? (
        <PostVideo {...props} />
      ) : (
        <PostImage {...props} heart={heart} setHeart={setHeart} />
      )}

      <div className="fundo">
        <PostActions {...props} heart={heart} setHeart={setHeart} />
        <PostLikes {...props} />
      </div>
    </div>
  );
}
