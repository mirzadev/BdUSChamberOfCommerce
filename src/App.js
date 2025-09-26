import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavbarItems/Navbar";
import "leaflet/dist/leaflet.css";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import Contact from "./Routes/ContactUs";
import Membership from "./Routes/Membership";
import MembershipFormPage from "./Routes/MembershipForm";
import MembersBenefit from "./Routes/MembersBenefit";
import Payments from "./Routes/Payments";
import PaymentReceiptPage from "./Components/PaymentSuccessPage/PaymentReceiptPage";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/enrolmentforms" element={<MembershipFormPage />} />
        <Route path="/membersbenefit" element={<MembersBenefit />} />
        <Route path="/membershippayments" element={<Payments />} />
        <Route
          path="/membership/payment/success"
          element={<PaymentReceiptPage />}
        />
        {/*<Route path="/career" element={<Career />} />
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
