/* @flow */
import React from 'react'
// noinspection JSUnresolvedVariable
import { render } from 'react-dom'
// noinspection JSUnresolvedVariable
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import QiitaApp from './component/QiitaApp'
import NotFound from './component/NotFound'

const Index = (props: { children: any }): any => (
  <div>
    {props.children}
  </div>
)

render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={QiitaApp} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('container')
)
