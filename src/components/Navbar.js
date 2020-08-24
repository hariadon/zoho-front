// Navbar.js

import React from 'react'
import LoginForm from "./forms/LoginForm";
import UserForm from "./forms/UserForm";

export default (props) => {
  let userimage = props.user.image || "/default-user.png";

  let usernav = <>
    <li> <a href="#login" className="btn waves-effect waves-light teal lighten-1 modal-trigger">Login</a> </li>
    <li> <a href="#signup" className="btn waves-effect waves-light blue lighten-1 modal-trigger">Signup</a> </li>
  </>;
  let usersidenav = <>
    <li><a href="#login" className="waves-effect waves-light modal-trigger">Login</a></li>
    <li><a href="#signup" className="waves-effect waves-light  modal-trigger">Signup</a></li>
  </>

  if (props.isLoggedIn) {
    usernav = <>
      <li><img className="preview" src={userimage} alt={props.user.name} /> </li>
      <li> <a href="#!" onClick={props.logout} className="btn waves-effect waves-light red lighten-2 modal-trigger">Logout</a> </li>
      <li> <a href="#!" onClick={props.templates} className="btn waves-effect waves-light teal lighten-1 modal-trigger">Templates</a> </li>
    </>
    usersidenav = <>
      <li> <a href="#!" onClick={props.logout} className="waves-effect waves-light">Logout</a> </li>
      <li> <a href="#!" onClick={props.templates} className="waves-effect waves-light">Templates</a> </li>
    </>
  }

  return (<>
    <nav className="nav grey darken-3" role="navigation">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo white-text">ZOHO</a>
        <ul className="hide-on-med-and-down right">
          {usernav}
        </ul>
        <ul id="nav-mobile" className="sidenav">
          {usersidenav}
        </ul>
        <a href="#!" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>

    <div id="login" className="modal">
      <div className="modal-content">
        <h4>Log In</h4>
        <LoginForm handleSubmit={props.login} />
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Cancel</a>
        <button type="submit" className="waves-effect waves-teal btn-flat" onClick={props.login}>Login</button>
      </div>
    </div>

    <div id="signup" className="modal">
      <div className="modal-content">
        <h4>Sign Up</h4>
        <UserForm handleSubmit={props.signup} />
      </div>
      <div className="modal-footer">
        <a href="#!" className="waves-effect teal waves-teal btn-flat" onClick={props.signup}>SignIn</a>
      </div>
    </div>

  </>);

}