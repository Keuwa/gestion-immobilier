import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import LoginPage from './components/LoginPage'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={LoginPage}/>
  </Route>
);

export default routes;
