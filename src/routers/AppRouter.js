import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;