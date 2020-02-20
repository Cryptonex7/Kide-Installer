import React from 'react';
import logo from './kide_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kide - The Ultimate KIIT Experience!
        </p>
        <button
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href="https://www.dropbox.com/s/kdmsmya4e5dd57l/app-release.apk?dl=1" className="link">
            Download Now
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
