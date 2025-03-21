// src/App.jsx
import React from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import Timeline from './Timeline'; // Import the Timeline component

function App() {
  return (
    <div className="App">
      <h1>Church Restoration Timeline</h1>
      <NavBar />
      <Timeline />
    </div>
  );
}

export default App;
