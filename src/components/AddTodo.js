import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        // this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <input type='text' ref='name'/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
    // handleChange(event){
    //     this.setState({
    //         value:event.target.value
    //     });
    // }
    handleClick(event) {
        const node = this.refs.name;
        const text = node.value
            .trim();
        this
            .props
            .onAddClick(text);
        node.value = '';
    }
};

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};