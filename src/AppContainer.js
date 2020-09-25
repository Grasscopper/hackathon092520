import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Expenses from './Expenses'

const AppContainer = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Expenses} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppContainer
