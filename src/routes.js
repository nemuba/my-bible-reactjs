import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/Home";
import Reading from './components/Reading';

const Routes = (props) => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reading/:book/:chapter/:verse" exact component={Reading} />
      </Switch>
    </Router>
  );
}

export default Routes;
