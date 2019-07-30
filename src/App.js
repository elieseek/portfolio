import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import './App.css';

function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function App() {

  const [Pos, setPos] = useState(window.scrollY)
  const handlePos = function(event) {
    let scrollPerc = getScrollPercent();
    let scroll = Math.min(Math.max(5, scrollPerc/2), 45);
    document.documentElement.style
      .setProperty('--scroll-position', scroll-45 + 'deg')
  }
  useEffect(() => {
    window.addEventListener("scroll", handlePos)
    return () => {
      window.removeEventListener("scroll", handlePos)
    };
  }, [])

  return (
    <Router>
      <Route exact path='/' component = {Home}/>
      <Route path='/contact' component = {Contact}/>
      <Route path='/projects' component = {Projects}/>
    </Router>
  );
}

export default App;
