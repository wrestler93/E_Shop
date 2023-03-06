import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/cart" element={[<Header />, <Cart />]} />
          <Route path="/dashboard" element={[<Header />, <Dashboard />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
