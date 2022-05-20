import ModelViewer from "./components/ModelViewer";
import "./assets/css/App.css";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <ModelViewer />
    </div>
  );
}

export default App;
