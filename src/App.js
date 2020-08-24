import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { getOptions, handleResponse, toast } from "./util";
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import './App.css'

class App extends Component {

  state = {
    loggedIn: false,
    user: {}
  }

  componentDidMount() {
    M.AutoInit();
  }

  componentWillUnmount() {
    sessionStorage.removeItem("token");
  }

  login = (e) => {
    e.preventDefault();
    M.Modal.getInstance(document.getElementById('login')).close();

    let user = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }

    fetch('/api/users/login', getOptions("POST", { user }))
      .then(handleResponse)
      .then(({ user }) => {
        sessionStorage.setItem("token", user.token);
        delete user.token;
        this.setState({ loggedIn: true, user });
      })
      .catch(err => {
        console.error("error in logging in >>>>>>>>> ", err);
        toast('could not log you in');
      });
  }

  signup = (e) => {
    e.preventDefault();
    let user = { image: document.getElementById('image_preview').src };
    ["name", "address", "email", "password", "mobile"]
      .forEach(key => user[key] = document.getElementById(key).value);
    fetch('/api/users/signup', getOptions("POST", { user }))
      .then(handleResponse)
      .then(({ user }) => {
        M.Modal.getInstance(document.getElementById('signup')).close();
        sessionStorage.setItem("token", user.token);
        delete user.token;
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setState({ loggedIn: true });
      })
      .catch(err => {
        console.error("error in logging in >>>>>>>>> ", err);
        toast('kindly provide valid fields and try again');
      });
  }

  logout = (e) => {
    sessionStorage.removeItem("token");
    this.setState({ loggedIn: false });
  }


  render() {
    return (
      <>
        <Navbar isLoggedIn={this.state.loggedIn} user={this.state.user} signup={this.signup} login={this.login} logout={this.logout} templates={this.templates} addUserDetail={this.addUserDetail} />
        <br />
        <Contacts user={this.state.user} />
        <br />
        <Footer addContact={() => console.log("TODO:// implement add contact api")} />
      </>
    );
  }

}

export default App;
