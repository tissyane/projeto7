import Posts from "../Posts/Posts";
import Stories from "../Stories";

export default function LeftContent() {
  return (
    <div>
      <div className="esquerda">
        <div>
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}
