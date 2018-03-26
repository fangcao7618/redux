import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from './Routes';
import PropTypes from 'prop-types';

class Layout extends Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
            <HashRouter>
                <div>
                    <Switch>
                        {routes.map((route, i) => <Route
                            key={i}
                            exact={!!route.exact}
                            path={route.path}
                            component={route.component}/>)}
                    </Switch>
                </div>
            </HashRouter>
            </Provider>
        );
    }
}

Layout.propTypes = {
    store: PropTypes.object.isRequired
};

export default Layout;
