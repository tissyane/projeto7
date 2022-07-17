import React from "react";

export default function PostImage(props) {
  return (
    <div className="conteudo">
      <img
        src={props.content}
        alt="Imagem do post"
        onClick={() => {
          if (props.heart === "heart-outline") {
            props.setHeart("heart");
          }
        }}
      />
    </div>
  );
}
