import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// ACTIONS
import { addData } from "../store/Modules/Data/actions";

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
  const dispatch = useDispatch();
  const authenticated = useSelector(({ authenticated }) => authenticated);

  useEffect(() => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/profile/:id" component={Profile} />

        {authenticated ? (
          <>
            <Route exact path="/users/techs/:id" component={Techs} />
            <Route exact path="/users/works/:id" component={Works} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </>
  );
};

export default Routes;
