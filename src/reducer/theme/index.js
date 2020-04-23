const defaultTheme = '#f4f488';
const theme = (state = defaultTheme,action) => {
    switch (action.type){
        case 'THEME_CHANGE':
            return action.theme;
        case 'SHOW_THEME':
            return state;
        default:
            return state;
    }
}

export default theme;