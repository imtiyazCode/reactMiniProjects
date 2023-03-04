
const useFormatTime = (milliseconds) => {
    const formatTime = `${milliseconds.hours() < 10 ? '0' + milliseconds.hours() : milliseconds.hours()} : ${milliseconds.minutes() < 10 ? '0' + milliseconds.minutes() : milliseconds.minutes()} : ${milliseconds.seconds() < 10 ? '0' + milliseconds.seconds() : milliseconds.seconds()}`
    return [formatTime]
}

export default useFormatTime