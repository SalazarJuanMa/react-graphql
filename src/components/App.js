import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '../pages/404'
import UsersContainer from '../pages/UsersContainer'
import UserNewContainer from '../pages/UserNewContainer'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/users/new" component={UserNewContainer} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App