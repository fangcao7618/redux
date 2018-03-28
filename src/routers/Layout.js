import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';

import routes from './Routes';
// import PropTypes from 'prop-types'; import {Provider} from 'react-redux';

class Layout extends Component {
    render() {
        return (
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
        );
    }
}

// Layout.propTypes = {     store: PropTypes.object.isRequired };

export default Layout;
