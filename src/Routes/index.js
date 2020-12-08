import {Switch, Route} from 'react-router-dom'

// PAGES
import Login from '../pages/Login'
import Register from '../pages/Register'
import Users from '../pages/Users'
import Profile from '../pages/Profile'
import Techs from '../pages/Techs'
import Works from '../pages/Works'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route exact path='/register'>
                <Register />
            </Route>
            <Route exact path='/users'>
                <Users />
            </Route>

            {/* LOGGED */}
            <Route exact path='/users/profile'>
                <Profile />
            </Route>
            <Route exact path='/users/techs'>
                <Techs />
            </Route>
            <Route exact path='/users/works'>
                <Works />
            </Route>
        </Switch>
    )

}

export default Routes;