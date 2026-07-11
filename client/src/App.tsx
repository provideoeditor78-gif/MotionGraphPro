import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import GraphCanvas from "./components/GraphCanvas";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Toolbar />

      <GraphCanvas />
    </div>
  );
}

export default App;