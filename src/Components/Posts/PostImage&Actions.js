import React from "react";

export default function PostImageAction(props) {
  const [heart, setHeart] = React.useState("heart-outline");
  const [bookmark, setBookmark] = React.useState("bookmark-outline");

  return (
    <div className="conteudo">
      <img
        src={props.content}
        alt="Imagem do post"
        onClick={() => {
          if (heart === "heart-outline") {
            setHeart("heart");
          }
        }}
      />
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={heart}
              onClick={() => {
                heart === "heart-outline"
                  ? setHeart("heart")
                  : setHeart("heart-outline");
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={bookmark}
              onClick={() => {
                bookmark === "bookmark-outline"
                  ? setBookmark("bookmark")
                  : setBookmark("bookmark-outline");
              }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
