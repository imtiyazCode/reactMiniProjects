
const useStoreLocal = (data) => {
    localStorage.setItem('myAlarms', JSON.stringify(data))
    return [JSON.stringify(data)]
}

export default useStoreLocal