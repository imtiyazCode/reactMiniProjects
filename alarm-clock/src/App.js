import './App.css';
import Clock from './Components/Clock';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date(Date.now()))

  const updateTime = () => {
    setTime(new Date(Date.now()))
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Clock time={time} updateTime={updateTime} />
    </div>
  );
}

export default App;
