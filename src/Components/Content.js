import LeftContent from "./LeftContent";
import Sidebar from "./Sidebar";

export default function Content() {
  return (
    <div>
      <div className="corpo">
        <LeftContent />
        <Sidebar />
      </div>
    </div>
  );
}
