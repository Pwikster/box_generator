import React, {useState} from 'react'
import './App.css';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([])

  const addBox = (box) => {
    setCurrentBoxes([...currentBoxes, box])
  }

  return (
    <div className="App">
      <BoxForm addBox={ addBox }/>
      <DisplayBox boxes={ currentBoxes } />
    </div>
  );
}

export default App;
