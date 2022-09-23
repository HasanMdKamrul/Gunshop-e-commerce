import { useState } from 'react';
import './App.css';
import Allguns from './components/Allguns/Allguns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cartValue, setCartValue] = useState(0);
  // ** cart value update handler
  const cartValueUpdateHandler = ()=> setCartValue(cartValue+1);
  return (
    <div className="App">
     <Navbar cartValue={cartValue}></Navbar>
     <Allguns cartValueUpdateHandler={cartValueUpdateHandler}></Allguns>
    </div>
  );
}

export default App;
