import ReactDOM from "react-dom";

import NavBar from "./Components/NavbarFooter/NavBar";
import Content from "./Components/MainContent/Content";
import MobileFooter from "./Components/NavbarFooter/MobileFooter";

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
