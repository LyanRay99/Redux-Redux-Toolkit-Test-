//có thể tạo biến chứa initvalue tại đây rồi truyền vào function dưới
// const initState = 0

// hàm counter này sẽ thực hiện thay đổi value của state
const reducerFn = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'Tang':
            return {
                counter: state.counter + 1
            }

        case 'Giam':
            return {
                counter: state.counter - 1
            }

        case 'Nhan':
            return {
                counter: state.counter * 5
            }

        case 'Reset':
            return {
                counter: 0
            }

        default:
            return state
    }
}


export default reducerFn