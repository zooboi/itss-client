import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> <i> Robot Controller </i> </h2>
      <h5> <i> by group 5 </i> </h5>

      <div className="control-area">
        <div className="status-area">
          <p>Status show here</p>
        </div>
        <div className="port-button">
          <div className="port-area">
            <form>
              <label>
                Port:
    <input type="text" name="port" />
              </label>
              <input type="submit" value="Submit" />
            </form>

          </div>

          <div className="button-area">
            <div className="left">
              <button id="LFT" class="robot">LEFT</button>
            </div>
            <div className="middle">
              <button id="FWD" class="robot">FORWARD</button>
              <button id="STP" class="robot">STOP</button>
              <button id="REV" class="robot">REVERSE</button>
            </div>
            <div className="right">
              <button id="RGT" class="robot">RIGHT</button>

            </div>
          </div>
        </div>
      </div>








    </div >
  );
}

export default App;
