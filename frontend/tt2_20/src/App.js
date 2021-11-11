import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" exact component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
