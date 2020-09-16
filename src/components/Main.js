import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Todo from "./Todo";
//import Profile from "./Profile";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Todo</NavLink></li>
              <li><NavLink to="/">Todo</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/" component={Todo}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;