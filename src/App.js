import "./App.css";
import "../node_modules/antd/dist/antd.css";
import FacultyDashboard from "./components/FacultyDashboard";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <StudentDashboard />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </div>
  );
}

export default App;
