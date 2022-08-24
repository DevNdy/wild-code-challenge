import { Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
