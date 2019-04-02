// For reference: consider this as the basic and fundamental step to begin redux integration process

import React, { Component } from 'react';

// Components
import PostFrom from './components/PostForm'; 
import AllPost from './components/AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <PostFrom />
        <AllPost />
      </div>
    );
  }
}

export default App;
