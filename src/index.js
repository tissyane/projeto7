import ReactDOM from "react-dom";

import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import MobileFooter from "./Components/MobileFooter";

function App() {
  return (
    <div>
      <NavBar />
      <Content />
      <MobileFooter />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
