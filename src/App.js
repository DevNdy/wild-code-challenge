import { Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import NavBar from "./components/navbar/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import RoyalAssets from "./pages/RoyalAssets";
import RoyalFamily from "./pages/RoyalFamily";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/royalfamily" element={<RoyalFamily />} />
        <Route path="/royalassets" element={<RoyalAssets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
