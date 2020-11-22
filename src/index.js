import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./components/Main";
import Search from "./components/Search";
import User from "./components/User";
import NavBar from "./components/NavBar";
import RepositoryList from './components/RepositoryList';
import RepoTooltip from './components/RepoTooltip';

const routes = (
  <Router>
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/" component={Search} />
      <Route exact path="/user/:username" component={User} />
      <Route exact path="/user/:username" component={RepositoryList} />
      <Route exact path="/user/:username" component={RepoTooltip} />
    </Switch>
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));
