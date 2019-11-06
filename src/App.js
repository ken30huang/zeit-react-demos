import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>基于React搭建的学习网站</p>
        <p>项目部署在Roast云平台上<br />访问地址：<a className="App-link" target="_blank" href="https://daily-guide-315.roast.io">https://daily-guide-315.roast.io</a></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >React官网</a>
      </header>
    </div>
  );
}

export default App;
