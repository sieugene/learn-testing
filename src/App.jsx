import React, { useState } from 'react';
import Post from './components/post';
import Posts from './components/Posts/Posts';
import Title from './components/Title/Title';
import Select from './components/Select/Select';

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
        <Post/>
        <Posts/>
        <Title/>
        <Select handleChange={handleChange} value={value} options={options}/>
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
