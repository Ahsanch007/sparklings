import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from './components/layout/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Home/Footer';

// Import your components here
// import Home from './pages/Home';
// import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
