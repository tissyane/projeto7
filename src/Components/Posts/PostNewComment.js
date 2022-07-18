export default function PostNewComment() {
  return (
    <div className="post-comments">
      <div>
        <ion-icon name="happy-outline"></ion-icon>
        <input type="text" placeholder="Adicione um comentário" />
      </div>
      <button>Publicar</button>
    </div>
  );
}
