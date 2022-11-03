import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Search from './components/Search';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

         <div className="nav">
          <link to="/infinite-site">home</link>
          <link to="/infinite-site/account">Account</link>
          <link to="/infinite-site/faq">FAQ</link>
          <link to="/infinite-site/contact">Contact</link>
          <link to="/infinite-site/random">Random</link>
         </div>

         <Routes>
          <Route path="/infinite-site/account" element={<div> Account</div>} />
          <Route path="/infinite-site/faq" element={<FAQ />} />
          <Route path="/infinite-site/contact" element={<Contact /> } />
          <Route path="/infinite-site/contact/:person" element={<Contact /> } />
          <Route path="/infinite-site/search" element={<Search />} />
          <Route path="/infinite-site/search/:query" element={<Search />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
