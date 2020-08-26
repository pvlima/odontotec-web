import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ListSchedules from '../pages/Schedules/List';
import CreateSchedule from '../pages/Schedules/Create';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/atendimentos" exact component={ListSchedules} />
    <Route path="/atendimentos/novo" exact component={CreateSchedule} />
  </Switch>
);

export default Routes;
