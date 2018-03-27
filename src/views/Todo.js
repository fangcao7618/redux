import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from '../actions/actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

// class Todo extends Component {
//     render() {
//         const {dispatch, visibleTodos, visibilityFilter} = this.props;
//         return (
//             <div>
//                 <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
//                 <TodoList
//                     todos={visibleTodos}
//                     onTodoClick={index => dispatch(toggleTodo(index))}/>
//                 <Footer
//                     filter={visibilityFilter}
//                     onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
//             </div>
//         )
//     }
// };


class Todo extends Component {
    componentWillMount(){
        console.log(1)
        this.props.dispatch(addTodo('test'))
    }
    render() {
        console.log(this.props)
        return (
            <div>
            vvv
            </div>
        )
    }
};

Todo.propTypes = {
    // visibleTodos: PropTypes
    //     .arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}).isRequired)
    //     .isRequired,
    // visibilityFilter: PropTypes
    //     .oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'])
    //     .isRequired
};

const selectTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            break;
    }
};

const select = (state) => {
    console.log(state);
    return {
        visibleTodos: selectTodos(state.todos, state.VisibilityFilters),
        visibilityFilter: state.VisibilityFilters
    }
};

export default connect(select)(Todo);