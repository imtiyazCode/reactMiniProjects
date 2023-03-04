import React, { useEffect } from 'react'
import moment from 'moment'
import './Clock.css'

import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../redux/actions/TimerAction';

const Clock = () => {
    const dispatch = useDispatch()
    const time = useSelector(state => state.updateTimeReducer.time)
    const activeAlarms = useSelector(state => state.alarmReducer.activeAlarm)

    useEffect(() => {
        const timerId = setInterval(() => dispatch(updateTime()), 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className="clock-container">
            <p className="time" style={{color: activeAlarms? "#232d31":"#fff"}}>{moment(time).format('hh:mm:ss A')}</p>
            <p className="date" style={{color: activeAlarms? "#232d31":"#fff"}}>{time.toLocaleDateString()}</p>
        </div>
    )
}

export default Clock