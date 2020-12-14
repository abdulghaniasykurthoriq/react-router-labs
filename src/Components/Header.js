import React from "react";
import { 
  withRouter,
    NavLink,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Counter from "../Pages/Counter";
import Testing from "./Testing";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header-wrap">
          <ul className="nav-menu">
              <li className="nav-menu-item">
                  <NavLink className="mantap" exact to='/'>Index</NavLink>
              </li>
              <li className="nav-menu-item">
                  <NavLink className="mantap" to='/home'>Home</NavLink>
              </li>
              <li className="nav-menu-item">
                  <NavLink className="mantap" to='/profile'>Profile</NavLink>
              </li>
          </ul>
        </div>
        <Route path="/home" component={Home} />
        <Route path="/home/testing" component={Testing} />
        <Route path="/profile" component={Profile} />

        <Route path="/profile/:id" component={Profile} />
        <Route path="/counter" component={Counter} />
      </>
    );
  }
}

export default withRouter(Header);
