import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import Info from './components/Info/Info';

function App() {
  const [value, setValue] = useState(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const options = [
    {value: 'test', label: 'test'},
    {value: 'test2', label: 'test2'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        Basic testing
        {/* <Select handleChange={handleChange} value={value} options={options}/> */}
        <Posts/>
        <Info/>
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
