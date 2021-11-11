import "./App.css";
import { Routes , Route, HashRouter} from "react-router-dom";
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </HashRouter>
   
     
    </div>
  );
}

export default App;
