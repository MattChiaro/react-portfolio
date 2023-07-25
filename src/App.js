import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

import Contact from "./pages/Contact";

// CSS
import './css/index.css';


function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/react-portfolio"
            element={<Home />}
          />
          <Route
            path="/portfolio"
            element={<Project />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
