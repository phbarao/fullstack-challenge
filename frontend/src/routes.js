import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Products from './pages/Products';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
