import React from 'react';
import SidePanel from './panel/SidePanel/SidePanel';
import ListPanel from './panel/ListPanel/ListPanel';
import ContentPanel from './panel/ContentPanel/ContentPanel';

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
