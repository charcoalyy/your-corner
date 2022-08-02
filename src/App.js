import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Home';
import Page from './Page';
import MakePage from './MakePage';
import NotFound from './NotFound';

function App() {
  const [pages, setPages] = useState([]);
  const [name, setName] = useState(localStorage.getItem('name') || 'friend');

  useEffect(() => {
    localStorage.setItem('name', String(name));
  }, [name]);

  return (
    <Router>
      <div className="App">
        <Navbar />
      
        <section className="content">
          <Routes>
            <Route path="/" element={<Homepage pages={pages} setPages={setPages} name={name} setName={setName} />} />
            <Route path="/make-new" element={<MakePage />} />
            <Route path="/page/:id" element={<Page />} />
            <Route path="/items/:itemId" element={<Page />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </section>
          
      </div>
    </Router>
  );
}

export default App;


/*
TO DO
    - FIX BUG WITH MAKE PAGE THAT MAKES YOU UNABLE TO CLICK ON HOMEPAGE SOMETIMES.....
    - NEW BUTTON THAT FILTERS/SEARCHES CURRENT PAGES ie. set prop pages={pages.filter(xxx)}
    - NEW BUTTON TO EDIT PAGE
    - make button to change colours
    - make homepage delete button
*/
