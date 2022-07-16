function StoriesContainer(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.storyimg} />
      </div>
      <div class="usuario">{props.user}</div>
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default function Stories() {
  const storiesBox = [
    {
      storyimg: "assets/img/9gag.svg",
      user: "9gag",
    },
    {
      storyimg: "assets/img/meowed.svg",
      user: "meowed",
    },
    {
      storyimg: "assets/img/barked.svg",
      user: "barked",
    },
    {
      storyimg: "assets/img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet",
    },
    {
      storyimg: "assets/img/wawawicomics.svg",
      user: "wawawicomics",
    },
    {
      storyimg: "assets/img/respondeai.svg",
      user: "respondeai",
    },
    {
      storyimg: "assets/img/filomoderna.svg",
      user: "filomoderna",
    },
    {
      storyimg: "assets/img/memeriagourmet.svg",
      user: "memeriagourmet",
    },
  ];

  return (
    <div class="stories">
      {storiesBox.map((value) => (
        <StoriesContainer storyimg={value.storyimg} user={value.user} />
      ))}
    </div>
  );
}
