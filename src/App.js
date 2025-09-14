import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavbarItems/Navbar";
// import "leaflet/dist/leaflet.css";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/development" element={<SoftwareDevelopment />} />
        <Route path="/appDevelopment" element={<AppDev />} />
        <Route path="/webDevelopment" element={<WebDev />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/career/frontend-developer"
          element={<FrontEndDeveloper />}
        />
        <Route path="/apply/job" element={<JobApply />} />
        <Route path="/job/:jobId" element={<FrontEndDeveloper />} />
        <Route path="/apply/:jobId" element={<JobApply />} /> */}
      </Routes>
    </div>
  );
}

export default App;
