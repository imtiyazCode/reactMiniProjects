export const setAlarm = (alarm) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_ALARM',
            payload: alarm
        })
    }
}

export const setAlarmsFromStorage = (alarm) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_ALARMS_FROM_STORAGE',
            payload: alarm
        })
    }
}

export const setActiveAlarm = (alarm) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_ACTIVE_ALARM',
            payload: alarm
        })
    }
}

export const clearActiveAlarm = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CLEAR_ACTIVE_ALARM'
        })
    }
}

export const deleteAlarm = (newAlarms) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_ALARM',
            payload: newAlarms
        })
    }
}

export const updateAlarm = (updatedAlarm) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'UPDATE_ALARM',
            payload: updatedAlarm
        })
    }
}