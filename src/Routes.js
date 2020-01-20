import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import ShowTemplate from './Components/ShowTemplate';
import FormCreateTemplate from './Components/FormCreateTemplates';
const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/" component={FormCreateTemplate} />
      <Route exact path="/preview" component={ShowTemplate} />
    </Switch>
  </App>
);
export default AppRouters;
