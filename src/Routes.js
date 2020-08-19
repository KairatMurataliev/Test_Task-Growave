import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Statistics from './containers/Statistics/Statistics';

const Routes = props => {
    return (
        <Switch>
            <Route path='/' exact component={Statistics}/>
        </Switch>
    )
};

export default withRouter(Routes);
