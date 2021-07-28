import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Navbar from './components/navbar/Navbar';
import Featured from './components/featured/Featured';

import './App.css';



function App() {
  const [movieList, setMovieList] = useState([]);
  const [fruit, setFruit] = useState("");

  const handleFruitDropdownChange = (selectedFruit) => {
    setFruit(selectedFruit);
  };

  return (
    <div className="App">
      <header>
      <Navbar/>
      
   

      <h1>Movies App</h1>
      </header>

      <Featured/>
      

      <Dropdown
        onChange={handleFruitDropdownChange}
        options={["orange", "pear", "lemon"]}
        value={fruit}
      />
<Dropdown options={["tennis", "soccer", "basketball"]} />
      <Dropdown options={["1", "2", "3"]} />
    </div>
  );
}

export default App;
