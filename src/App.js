import React from 'react';
import Post from './components/post';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Basic testing
        <Post/>
        <Posts/>
      </header>
    </div>
  );
}
export default App;

export const sum = (a,b) => {
  return a + b
}

export const total = (shipping, subtotal) => {
  return sum(shipping,subtotal) + " rub"
}
