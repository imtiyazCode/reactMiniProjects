import React, { useState } from 'react'
import { deleteAlarm, setActiveAlarm, clearActiveAlarm } from '../../redux/actions/AlarmAction'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { updateAlarm } from '../../redux/actions/AlarmAction'

import './Alarm.css'
import useFormatTime from '../../Hooks/useFormat'
import useStoreLocal from '../../Hooks/useStore'

const Alarm = ({ index, alarm }) => {
    const dispatch = useDispatch()
    const alarms = useSelector(state => state.alarmReducer.alarms)
    const currentTime = useSelector(state => state.updateTimeReducer.time)
    const alarmRing = new Audio('alarmRing.mp3')

    const [isEdit, setIsEdit] = useState(false)
    const [time, setTime] = useState(alarm.time);

    const HandleRemove = () => {
        let newAlarms = [...alarms]
        newAlarms.splice(index, 1)
        dispatch(deleteAlarm(newAlarms))
        useStoreLocal(newAlarms)
    }

    const handleChange = (e) => {
        setTime(e.target.value)
    }

    const HandleEdit = () => {
        setIsEdit(false)
        let newAlarms = [...alarms]
        newAlarms.splice(index, 1, { time: time, bgColor: alarm.bgColor })
        dispatch(updateAlarm(newAlarms))
        useStoreLocal(newAlarms)
    }
    const TimeDeff = () => {
        let startTime = moment(currentTime.toLocaleTimeString(), 'hh:mm:ss a')
        let endTime = moment(alarm.time, 'hh:mm')
        const diffTime = moment.duration(endTime.diff(startTime));

        if (diffTime._milliseconds === 0) {
            alarmRing.play();
            dispatch(setActiveAlarm(alarm))
            setTimeout(() => {
                alarmRing.pause()
                dispatch(clearActiveAlarm())
            }, 5000)
        }
        if (diffTime._milliseconds < 0) {
            diffTime.add(1, 'days')
        }
        return useFormatTime(diffTime)
    }

    return (
        <div className="alarm-container" style={{ backgroundColor: alarm.bgColor }}>
            <div className="alarm-time-container">
                {isEdit ?
                    <input className="alarm-time-input" onChange={handleChange} type="time" value={time} />
                    : <div className='alarm-time'>{moment(alarm.time, 'HH:mm').format('hh:mm A')}</div>
                }
            </div>
            <p className='alarm-left-time'>{TimeDeff()}</p>
            <div className="alarm-actions">
                <button className='alarm-action-btn alarm-remove-btn' type='button' onClick={HandleRemove}><AiFillDelete size={25} /></button>
                {isEdit ? <button className='alarm-action-btn alarm-edit-btn' type='button' onClick={HandleEdit}><MdOutlineDownloadDone size={25} /></button>
                    : <button className='alarm-action-btn alarm-edit-btn' type='button' onClick={() => setIsEdit(true)}><AiFillEdit size={25} /></button>
                }
            </div>
        </div>
    )
}

export default Alarm