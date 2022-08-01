import React, { useState } from 'react';
import Navbar from './Navbar';
import Homepage from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Page';
import MakePage from './MakePage';

function App() {

  const [pages, setPages] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
      
        <section className="content">
          <Routes>
            <Route path="/" element={<Homepage pages={pages} setPages={setPages} />} />
            <Route path="/make-new" element={<MakePage />} />
            <Route path="/page/:id" element={<Page />} />
            <Route path="/items/:itemId" element={<Page />} /> 
          </Routes>
        </section>
          
      </div>
    </Router>
  );
}

export default App;
