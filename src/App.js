import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main>Content</main>
      <div class="fixed inset-x-0 bottom-0">
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
