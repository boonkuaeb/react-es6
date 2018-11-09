import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    let sample = "sample 01";
    return (
      <div className="App">
          <Header
          title={sample}
          counter="01"
          />
      </div>
    );
  }
}

export default App;
