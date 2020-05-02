import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <span className="result">Screen</span>
        </div>
        <div className="keyboard">
          <div className="row">
            <div className="key">7</div>
            <div className="key">8</div>
            <div className="key">9</div>
            <div className="key">X</div>
          </div>
          <div className="row">
            <div className="key">4</div>
            <div className="key">5</div>
            <div className="key">6</div>
            <div className="key">-</div>
          </div>
          <div className="row">
            <div className="key">1</div>
            <div className="key">2</div>
            <div className="key">3</div>
            <div className="key">+</div>
          </div>
          <div className="row">
            <div className="key">0</div>
            <div className="key">.</div>
            <div className="key">%</div>
            <div className="key">=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
