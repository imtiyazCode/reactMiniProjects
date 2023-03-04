import React, { useState } from 'react'
import Alarm from '../Alarm'

import './AlarmContainer.css'

const AlarmContainer = ({ alarms, setAlarm, activeAlarms }) => {
    const [time, setTime] = useState('')

    const generateLightColorHex = () => {
        let color = "#";
        do {
            for (let i = 0; i < 3; i++)
                color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
        } while (alarms.filter(alarm => alarm.bgColor === color).length > 0);
        return color;
    }

    const HandleAddAlarm = () => {
        if (time) {
            if (alarms.filter(alarm => alarm.time === time).length === 0) {
                const bgColor = generateLightColorHex();
                setAlarm({ time, bgColor })
            }
            else {
                alert("Alarm is already scheduled");
            }
        }
        setTime('')
    }

    const handleChange = (e) => {
        setTime(e.target.value)
    }

    return (
        <div className="alarm-page-container">
            <h1 className='alarm-container-heading' style={{ color: activeAlarms ? "#232d31" : "#fff" }}>Alarms</h1>
            <div className="alarm-container-input">
                <input type="time" className='add-alarm-input' value={time} onChange={handleChange} placeholder="Add a new alarm" />
                <div className="alarm-add-btn-container">
                    <button className='add-alarm-button' onClick={HandleAddAlarm}>Set Alarm</button>
                </div>
            </div>
            <div className="alarm-list-container">
                {alarms?.map((alarm, i) => <Alarm key={i} index={i} alarm={alarm} />)}
            </div>
        </div>

    )
}

export default AlarmContainer