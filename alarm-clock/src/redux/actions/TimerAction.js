export const updateTime = () => {
    let time = new Date()
    return (dispatch, getState) => {
        dispatch({
            type: 'UPDATE_TIME',
            payload: time
        })
    }
}