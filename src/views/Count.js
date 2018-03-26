import React, {Component} from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter/Counter';

// const mapStateToProps = (store) => {
//     return {store: store.count}
// }
const CountApp = ({store, dispatch}) => {
    return (
        <Counter
        value={0}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>
    )
};
const HomePage = connect()(CountApp);
// @connect((state)=>(),(dispatch)=>());
class Count extends Component {
    render() {
        return (
            <div>
                <HomePage />
            </div>
        )
    }
};

export default Count;