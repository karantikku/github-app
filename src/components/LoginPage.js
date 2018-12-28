import React, { Component } from "react";

import {
  STATUS,
  Loading,
  Avatar,
  Logo,
  Logotype,
  Container,
  Header
} from "gitstar-components";

const CLIENT_ID = "d9d056daaa094fb72c81";
const REDIRECT_URI = "http://localhost:3000/";

class LoginPage extends Component {
  state = {
    status: STATUS.INITIAL,
    token: null
  };
   getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
  componentDidMount() {
     const code = this.getUrlVars().code;
     if (code) {
        this.setState({ status: STATUS.LOADING });
        fetch(`https://github-clone-app.herokuapp.com/authenticate/${code}`)
          .then(response => response.json())
          .then(({ token }) => {
            this.setState({
              token,
              status: STATUS.FINISHED_LOADING
            });
          });
      }
    }

  render() {
    return (
      <Container>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <Logotype />
          </div>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          >
            Login
          </a>
        </Header>
      </Container>
    );
  }
}

export default LoginPage;


