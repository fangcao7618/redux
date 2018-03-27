import {combineReducers} from 'redux';
import {
    ADD_TODO, 
    TOGGLE_TODO, 
    SET_VISIBILITY_FILTER, 
    VisibilityFilters
} from '../actions/actions';

const {SHOW_ALL} = VisibilityFilters;

const visibilityFilters = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

// (previousState, action) => newState reducer 就是一个纯函数，接收旧的 state 和 action，返回新的
// state。
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({},state[action.index],{
                    completed: true
                }),
                ...state.slice(action.index+1)
            ];
        default:
            return state;
    }
};

const todoApp = combineReducers({
    visibilityFilters,
    todos
});

export default todoApp;