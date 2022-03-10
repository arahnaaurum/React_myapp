import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Chats } from './pages/Chats';
import { Nopage } from './pages/Nopage';
import { Gists } from './pages/Gists';


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Chat Bot
      </header>
        <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/profile" className="link">Profile</Link>
        <Link to="/chats" className="link">Chats</Link>
        <Link to="/gists" className="link">Gists</Link>
        </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats/:chatId" element={<Chats />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/gists" element={<Gists />} />
          </Routes>


    </div>
  );
 }
 
export default App;
