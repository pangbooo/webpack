import React from 'react';
import {Route} from 'react-router-dom';

export const RouteWithSubRoutes = route => (
    <Route 
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} route={route.routes}/>
        )}
    />
);