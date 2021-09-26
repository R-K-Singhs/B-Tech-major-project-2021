import "./App.css";
import "../node_modules/antd/dist/antd.css";
import FacultyDashboard from "./components/FacultyDashboard";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
