import { Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import RoyalFamily from "./pages/RoyalFamily";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/royalfamily" element={<RoyalFamily />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
