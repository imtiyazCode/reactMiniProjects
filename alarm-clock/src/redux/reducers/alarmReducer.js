const initialState = {
    alarms: [],
    activeAlarm: null
}

export const alarmReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ALARM':
            return {
                ...state,
                alarms: [...state.alarms, action.payload]
            }

        case 'SET_ALARMS_FROM_STORAGE':
            return {
                ...state,
                alarms: action.payload
            }

        case 'UPDATE_ALARM':
            return {
                ...state,
                alarms: action.payload
            }

        case 'DELETE_ALARM':
            return {
                ...state,
                alarms: action.payload
            }

        case 'SET_ACTIVE_ALARM':
            return {
                ...state,
                activeAlarm: action.payload
            }

        case 'CLEAR_ACTIVE_ALARM':
            return {
                ...state,
                activeAlarm: null
            }

        default:
            return state
    }
}