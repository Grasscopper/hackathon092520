import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Expenses from './Expenses'
import AccountShow from './AccountShow'

const AppContainer = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Expenses} />
        <Route exact path="/hackathon092520" component={Expenses} />
        <Route exact path="/accounts/:id" component={AccountShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppContainer
