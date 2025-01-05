import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './components/Router';
import Confetti from 'react-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000); // Stop confetti after 8 seconds
    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <>
      <div className="app-container">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
