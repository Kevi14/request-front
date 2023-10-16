import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HttpRequestComponent from "./components/HttpRequestComponent";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id" Component={HttpRequestComponent} />
          <Route path="/" Component={HttpRequestComponent} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
