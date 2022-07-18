import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";
import PostVideo from "./PostVideo";
import React from "react";
import PostComment from "./PostComment";
import PostNewComment from "./PostNewComment";

export default function Post(props) {
  const [heart, setHeart] = React.useState("heart-outline");

  return (
    <div className="post">
      <PostHeader {...props} />
      {props.isVideo ? (
        <PostVideo {...props} heart={heart} setHeart={setHeart} />
      ) : (
        <PostImage {...props} heart={heart} setHeart={setHeart} />
      )}

      <div className="fundo">
        <PostActions {...props} heart={heart} setHeart={setHeart} />
        <PostLikes {...props} />

        <div className="comments">
          <div>
            <p className="comments_title">
              Ver todos os {props.commentsCount} comentários
            </p>
          </div>
          <div>
            <PostComment {...props} />
          </div>
          <div>
            <PostNewComment />
          </div>
        </div>
      </div>
    </div>
  );
}
