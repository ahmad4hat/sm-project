import React from "react";
import Layout from "./components/layout/Layout";
import Landing from "./containers/Landing/Landing";
import Profile from "./containers/Profile/Profile";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import Posts from "./containers/Posts/Posts";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
        <Route path="/profile" exact>
          <Profile></Profile>
        </Route>
        <Route path="/signup" exact>
          <Signup></Signup>
        </Route>
        <Route path="/Login" exact>
          <Login></Login>
        </Route>
        <Route path="/posts" exact>
          <Posts></Posts>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
