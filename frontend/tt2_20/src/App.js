import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectTable from "./components/ProjectTable";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/projects" element={<ProjectTable />} />
          <Route path="/expenses/:id" element={<ExpenseTable />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
