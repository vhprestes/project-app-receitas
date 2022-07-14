import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Foods from '../components/Foods';

// import { Container } from './styles';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
      </Switch>
    </div>
  );
}

export default Routes;
