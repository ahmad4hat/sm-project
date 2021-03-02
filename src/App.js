import React from "react";
import Layout from "./components/layout/Layout";
import Landing from "./containers/Landing/Landing";
import Profile from "./containers/Profile/Profile";
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
      </Switch>
    </Layout>
  );
};

export default App;
