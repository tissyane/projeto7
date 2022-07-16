function PostsContainer(props) {
  return (
    <div>
      <div class="posts">
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.userimg} />
              {props.username}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.postimg} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.likeimg} />
              <div class="texto">
                Curtido por <strong>{props.likeuser}</strong> e{" "}
                <strong>outras {props.likescount} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const postsBox = [
    {
      userimg: "assets/img/meowed.svg",
      username: "meowed",
      postimg: "assets/img/gato-telefone.svg",
      likeimg: "assets/img/respondeai.svg",
      likeuser: "respondeai",
      likescount: "101.523",
    },
    {
      userimg: "assets/img/barked.svg",
      username: "barked",
      postimg: "assets/img/dog.svg",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
    },
    {
      userimg: "assets/img/barked.svg",
      username: "barked",
      postimg: "assets/img/dog.svg",
      likeimg: "assets/img/adorable_animals.svg",
      likeuser: "adorable_animals",
      likescount: "99.159",
    },
  ];

  return (
    <div>
      {postsBox.map((value) => (
        <PostsContainer
          userimg={value.userimg}
          username={value.username}
          postimg={value.postimg}
          likeimg={value.likeimg}
          likeuser={value.likeuser}
          likescount={value.likescount}
        />
      ))}
    </div>
  );
}
