import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import HomePage from "@/pages/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";

const Routing = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Routing;
