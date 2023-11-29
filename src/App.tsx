import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shay from "./pages/Shay";
import Bayar from "./pages/Bayar";
import Munk from "./pages/Munk";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shay" element={<Shay />} />
            <Route path="/bayar" element={<Bayar />} />
            <Route path="/munk" element={<Munk />} />



          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
