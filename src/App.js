import logo from "./logo.svg";
import "./App.css";
import { Button, Spinner, Toast } from "react-bootstrap";
import CardGrid from "./components/CardGrid/CardGrid";
import NavBar from "./components/NavBar/NavBar";
import Toasts from "./components/Toasts/Toasts";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Toast>Toast</Toast>
      <button>Plain Button</button>
      <Button variant="success">React Success</Button>
      <Button variant="warning">React Warning</Button>
      <Spinner animation="grow" variant="dark" />
      <Toasts></Toasts>
      <CardGrid></CardGrid>
    </div>
  );
}

export default App;
