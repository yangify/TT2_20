import "./App.css";
import { Routes , Route, HashRouter} from "react-router-dom";
import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
    </HashRouter>
   
     
    </div>
  );
}

export default App;
