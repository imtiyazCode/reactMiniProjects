const initialState = {
    time: new Date()
}

export const updateTimeReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'UPDATE_TIME':
            return {
              ...state,
                time: action.payload
            }
        default:
            return state
    }
}