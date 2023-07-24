import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";



function App() {
  return (
    <>
    <Router>   
    <Header/> 
    
   
    <Routes>
  
  <Route 
      path="/"
      element={<Home/>}
      />
  <Route
      path="/about"
      element={<h1>About</h1>}
      />

    </Routes>




    <Footer/>
    </Router>
    </>
     
  );
}

export default App;
