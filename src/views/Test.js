import React, { Component } from 'react';
import MyComponent from '../components/MyComponent';
import logo from '../img/logo.svg';
import '../style/Test.css';

class Test extends Component {
    render(){
        return (
            <div className="Test">
                <img src={logo} className="App-logo" alt="logo" />
                <MyComponent />
            </div>
        )
    }
};

export default Test;