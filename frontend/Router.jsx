import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Counter from 'pages/Counter';

const routes = [
  {
    path: '/',
    exact: true,
    component: Counter,
  },
  {
    path: '/:counter',
    exact: true,
    component: Counter,
  },
];

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, exact, component: Component, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <Component {...props} {...rest} />}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
