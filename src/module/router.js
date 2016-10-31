import React, { PropTypes } from 'react';

import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';
import Link from 'react-router/lib/Link';
import Redirect from 'react-router/lib/Redirect';

import IndexPage from 'routes/IndexPage'
import Dashboard from 'routes/Dashboard'
import NotFound from 'routes/NotFound'

import UserReducers from 'models/users'

export default function({ history }) {

    return (
        <Router history={history}>
            <Route path="/" component={IndexPage} >
                <IndexRoute component={Dashboard} />
                <Route path="users" component={Dashboard} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    );
};