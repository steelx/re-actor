// Core
import React from 'react';

// Router
import {Route, IndexRoute} from 'react-router';

// Layout
import Default from '../layouts/Default';

// Views
import Home from './Home';
import NotFound from './NotFound';


let Routes = (
    <Route path="/" component={Default}>
        <IndexRoute component={Home}/>
        <Route path="what" component={Home}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

export default Routes;