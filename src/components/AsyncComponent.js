import React, {Component} from "react";
// 以路由为中心进行代码分片
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const {default: component} = await importComponent();

            this.setState({component: component});
        }

        render() {
            const C = this.state.component;

            return C
                ? <C {...this.props}/>
                : null;
        }
    }

    return AsyncComponent;
}
