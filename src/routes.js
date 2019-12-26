import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/Home";
const Routes = (props) => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
};

export default Routes;
