import React, { useEffect } from 'react'
import moment from 'moment'
import './Clock.css'


const Clock = ({ time, updateTime, activeAlarms, }) => {
  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="clock-container">
      <p className="time" style={{ color: activeAlarms ? "#232d31" : "#fff" }}>{moment(time).format('hh:mm:ss A')}</p>
      <p className="date" style={{ color: activeAlarms ? "#232d31" : "#fff" }}>{time.toLocaleDateString()}</p>
    </div>
  )

}

export default Clock