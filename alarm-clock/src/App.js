import './App.css';
import AlarmContainer from './Components/AlarmContainer';
import Clock from './Components/Clock';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date(Date.now()))
  const [activeAlarms, setActiveAlarms] = useState([])

  const [alarms, setAlarms] = useState([])

  const updateTime = () => {
    setTime(new Date(Date.now()))
  }

  const setAlarm = (alarm) => {
    setAlarms([...alarms, alarm])
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Clock time={time} updateTime={updateTime} activeAlarms={activeAlarms} />
      <AlarmContainer alarms={alarms} setAlarm={setAlarm} activeAlarms={activeAlarms} />
    </div>
  );
}

export default App;
