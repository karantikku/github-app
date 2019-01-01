import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthProvider } from '../components/AuthContext'

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <AuthProvider>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <ProtectedRoute path="/dashboard" component={DashboardPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
      </AuthProvider>
    </div>
  </BrowserRouter>
);

export default AppRouter;