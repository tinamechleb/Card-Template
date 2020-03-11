import React from 'react';
import SmallCard from './SmallCard/SmallCard';
import BigCard from './BigCard/BigCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BigCard />
      <SmallCard />
    </div>
  );
}

export default App;
