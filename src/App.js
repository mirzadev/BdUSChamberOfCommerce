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
import TradeFeature from "./Routes/TradeMission";
import TradeMissionForm from "./Routes/TradeMissionForm";
import EventGallery from "./Routes/EventGallery";

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
        <Route path="/payments" element={<Payments />} />
        <Route
          path="/membership/payment/success"
          element={<PaymentReceiptPage />}
        />
        <Route path="/trade" element={<TradeFeature />} />
        <Route path="/tradeenrollment" element={<TradeMissionForm />} />
        <Route path="/events" element={<EventGallery />} />
        {/*<Route path="/job/:jobId" element={<FrontEndDeveloper />} />
        <Route path="/apply/:jobId" element={<JobApply />} /> */}
      </Routes>
    </div>
  );
}

export default App;
