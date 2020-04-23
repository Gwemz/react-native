export const THEME_CHANGE = 'THEME_CHANGE';
export const SHOW_THEME = 'SHOW_THEME';

// 修改页面主题
export function changeTheme(theme){
    return {type: THEME_CHANGE,theme}
}

// 展示页面主题
export function showTheme(){
    return {type: SHOW_THEME}
}