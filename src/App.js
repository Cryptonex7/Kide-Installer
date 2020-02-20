import React, {useEffect} from 'react';
import logo from './kide_logo.svg';
import loader from './loader.svg';
import './App.css';

function App() {
  useEffect(()=> {
    document.getElementById("download").click();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kide - The Ultimate KIIT Experience!
        </p>
        <div className="subtext">
          Please wait, the download has started...
        </div>
        <img src={loader} className="loader" width = "30px" alt="logo" />
        <div className="subtext">
          If download doesn't start in a while, click on the button below.
        </div>
        <button
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a id="download" href="https://www.dropbox.com/s/kdmsmya4e5dd57l/app-release.apk?dl=1" className="link">
            Download Now
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
