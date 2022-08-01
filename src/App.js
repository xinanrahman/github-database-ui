import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/notfound" element={<NotFound></NotFound>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <div class="fixed inset-x-0 bottom-0">
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
