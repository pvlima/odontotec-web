import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ListSchedules from '../pages/Schedules/List';
import CreateSchedule from '../pages/Schedules/Create';
import ListClients from '../pages/Clients/List';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/atendimentos" exact component={ListSchedules} />
    <Route path="/atendimentos/novo" exact component={CreateSchedule} />
    <Route path="/pacientes" exact component={ListClients} />
  </Switch>
);

export default Routes;
