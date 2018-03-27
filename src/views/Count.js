import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter/Counter';

// const mapStateToProps = (store) => {     return {store: store.count} }
const CountApp = ({store, dispatch}) => {
    // console.log(store.state, dispatch);
    return (<Counter
        value={0}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>)
};
// const mapStateToProps = (state) => {
//     console.log(state);
//     return {store: state}
// };
const HomePage = connect()(CountApp);
class Count extends Component {
    render() {
        return (
            <div>
                <HomePage/>
            </div>
        )
    }
};

export default Count;