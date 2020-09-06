import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { useAuth } from './hooks/useAuth';

const Routes = () => {
  const { user } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/standings" component={() => <h1>standings</h1>} />
      <Route exact path="/players" component={() => <h1>players</h1>} />
      <Route exact path="/teams" component={() => <h1>teams</h1>} />
      <Route exact path="/login">
        {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
