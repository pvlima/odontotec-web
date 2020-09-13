import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ListSchedules from '../pages/Schedules/List';
import CreateSchedule from '../pages/Schedules/Create';
import ListClients from '../pages/Clients/List';
import CreateClient from '../pages/Clients/Create';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/atendimentos/novo" component={CreateSchedule} isPrivate />
    <Route path="/atendimentos" component={ListSchedules} isPrivate />
    <Route path="/pacientes/novo" component={CreateClient} isPrivate />
    <Route path="/pacientes" component={ListClients} isPrivate />
  </Switch>
);

export default Routes;
