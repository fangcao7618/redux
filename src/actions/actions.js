/**
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO'; //添加列表
export const TOGGLE_TODO = 'TOGGLE_TODO'; //切换列表
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'; //过滤可用的列表

/**
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action 创建函数
 * @param {*} text
 */
export function addTodo(text) {
    return {type: ADD_TODO, text}
}
export function toggleTodo(index) {
    return {type: TOGGLE_TODO, index}
}
export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}