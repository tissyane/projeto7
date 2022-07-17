import React from "react";

export default function PostActions(props) {
  const [bookmark, setBookmark] = React.useState("bookmark-outline");

  return (
    <div className="acoes">
      <div>
        <ion-icon
          name={props.heart}
          onClick={() => {
            props.heart === "heart-outline"
              ? props.setHeart("heart")
              : props.setHeart("heart-outline");
          }}
        ></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon
          name={bookmark}
          onClick={() =>
            bookmark === "bookmark-outline"
              ? setBookmark("bookmark")
              : setBookmark("bookmark-outline")
          }
        ></ion-icon>
      </div>
    </div>
  );
}
