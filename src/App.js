import React from 'react';
import SidePanel from './panel/SidePanel';
import ListPanel from './panel/ListPanel';
import ContentPanel from './panel/ContentPanel';

import './App.css';

function App() {
  return (
    <div className="App">
      <SidePanel />
      <ListPanel />
      <ContentPanel />
    </div>
  );
}

export default App;
