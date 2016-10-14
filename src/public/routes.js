import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import LoginPage from './components/pages/LoginPage'
import MainPage from './components/pages/MainPage'

const routes = (
    <Route>
      <Route path="/" component={LoginPage}/>
      <Route path="main" component={MainPage}/>
    </Route>
);

export default routes;
