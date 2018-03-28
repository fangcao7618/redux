import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Counter from '../components/Counter/Counter';
import {increment,decrement} from '../actions/actions';

// const CountApp = ({count, dispatch}) => {
//     console.log(count);
    
//     return (<Counter
//         value={count}
//         onIncrement={(count) => dispatch(increment(count))}
//         onDecrement={(count) => dispatch(decrement(count))}/>)
// };
const mapStateToProps = (state) => {
    return {count: state.count}
};
// const HomePage = connect(mapStateToProps)(CountApp);
class Count extends Component {
    render() {
        const {count,dispatch}=this.props;
        return (
            <div>
            <Counter
            value={count}
            onIncrement={(count) => dispatch(increment(count))}
            onDecrement={(count) => dispatch(decrement(count))}/>
            </div>
        )
    }
};

Count.propTypes={
    count: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Count);