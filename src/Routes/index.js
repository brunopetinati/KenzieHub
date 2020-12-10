import { Switch, Route } from "react-router-dom";

// PAGES
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Techs from "../pages/Techs";
import Works from "../pages/Works";

// COMPONENTS
import Header from "../components/Header";

const Routes = () => {
  const isAuthenticated = false;
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/users">
        <Header isAuthenticated={isAuthenticated} />
        <Users />
      </Route>

      {/* LOGGED */}
      <Route exact path="/users/profile">
        <Header isAuthenticated={isAuthenticated} />
        <Profile />
      </Route>
      <Route exact path="/users/techs">
        <Header isAuthenticated={isAuthenticated} />
        <Techs />
      </Route>
      <Route exact path="/users/works">
        <Header isAuthenticated={isAuthenticated} />
        <Works />
      </Route>
    </Switch>
  );
};

export default Routes;
