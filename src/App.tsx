import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shay from "./pages/Shay";
import Bayar from "./pages/Bayar";
import Munk from "./pages/Munk";
import FamilyPhoto from "./pages/FamilyPhoto"
import FamilyPhotoMongolia from "./pages/FamilyPhotoMongolia"
import FamilyPhotoRussia from "./pages/FamilyPhotoRussia"
import FamilyPhotoUSA from "./pages/FamilyPhotoUSA"
import FamilyPhotoOther from "./pages/FamilyPhotoOther"
import FamilyEvents from "./pages/FamilyEvents"
import Friends from "./pages/Friends"
import Khulan from "./pages/Khulan"
import Naadam2007 from "./pages/Naadam2007"

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

            <Route path="/family_photo" element={<FamilyPhoto />} />

            <Route path="/family_photo_mongolia" element={<FamilyPhotoMongolia />} />
            <Route path="/family_photo_russia" element={<FamilyPhotoRussia />} />
            <Route path="/family_photo_usa" element={<FamilyPhotoUSA />} />
            <Route path="/family_photo_other" element={<FamilyPhotoOther />} />
            
            <Route path="/family_events" element={<FamilyEvents />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/khulan" element={<Khulan />} />
            <Route path="/naadam_2007" element={<Naadam2007 />} />

          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
