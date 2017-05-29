import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/app';
import DashboardContainer from '../containers/dashboard-container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardContainer} />
    <Route path="/dashboard" component={DashboardContainer} />
  </Route>
);
