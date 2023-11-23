import "./assets/style/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Location from "./routes/Location";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
