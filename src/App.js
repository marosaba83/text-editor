import React, { Component } from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
// import getMockText from './text.service';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  // getText () {
  //   getMockText().then(function (result) {
  //     console.log(result);
  //   });
  // }
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <span>Simple Text Editor</span>
          </header>
          <main>
            <ControlPanel />
            <FileZone />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
