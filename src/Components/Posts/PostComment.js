import React from "react";

export default function PostComment(props) {
  const [heart, setHeart] = React.useState("heart-outline");

  return (
    <>
      <div className="comments-list">
        <div>
          <p>
            <strong>{props.userComment}</strong> {props.commentText}
          </p>
        </div>
        <div className="buttonlike">
          <ion-icon
            name={heart}
            onClick={() => {
              heart === "heart-outline"
                ? setHeart("heart")
                : setHeart("heart-outline");
            }}
          ></ion-icon>
        </div>
      </div>
    </>
  );
}
