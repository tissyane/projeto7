import Posts from "./Posts";
import Stories from "./Stories";

export default function LeftContent() {
  return (
    <div>
      <div class="esquerda">
        <div>
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}
