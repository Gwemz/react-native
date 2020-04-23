const logininfo = (state = {},action) => {
    switch (action.type){
        case 'ADD_LOGIN_INFO':
            return Object.assign({},action.value)
        case 'CLEAR_LOGIN_INFO':
            return {}
        default:
            return state
    }
}

export default logininfo;