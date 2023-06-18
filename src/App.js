
import React from 'react';
import Aboutme from './Components/Aboutme';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portofolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Aboutme />
        <Portfolio />
        <Contact  />
    </div>
  );
}

export default App;
