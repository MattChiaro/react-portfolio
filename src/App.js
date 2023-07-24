import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<h1>About</h1>}
          />

        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
