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
import { AuthConsumer } from './AuthContext'

const CLIENT_ID = "d9d056daaa094fb72c81";
const REDIRECT_URI = "https://github-clone-app.herokuapp.com";
class LoginPage extends Component {
 
  state = {
    status: STATUS.INITIAL,
    token: null,
    isLoggedIn: false
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
   getUserInfoPromise(token) {
    const userInfoPromise = fetch(`https://api.github.com/user?access_token=${token}`);
    const userInfo = userInfoPromise.then(response => response.json());
    return userInfo;
   }
   async getUserInfo(token) {
    const userInfo = await this.getUserInfoPromise(token);
    sessionStorage.setItem('userImage',userInfo.avatar_url);
    sessionStorage.setItem('userName',userInfo.login);
    sessionStorage.setItem('userFullName',userInfo.name);
    sessionStorage.setItem('userEmail',userInfo.email);
    sessionStorage.setItem('userLocation',userInfo.location);
    sessionStorage.setItem('isAuth',true);
    this.setState({
      isLoggedIn: true
    });
  }
  componentDidMount() {
    const code = this.getUrlVars().code;
    if (code) {
      this.setState({ status: STATUS.LOADING });
      fetch(`https://clone-github-app-auth.herokuapp.com/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          this.getUserInfo(token);
          this.setState({
            token,
            status: STATUS.FINISHED_LOADING
          });
        });
    }
  }

  render() {
    return (
      <AuthConsumer>
      {({ isAuth, login, logout }) => (
        <Container>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <Logotype />
          </div>
          <Avatar
            style={{
              transform: `scale(${
                this.state.status === STATUS.AUTHENTICATED ? "1" : "0"
              })`
            }}
          />
          <a 
          style={{
            display: this.state.status === STATUS.INITIAL ? "inline" : "none"
          }}
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          onClick={login}
        >
          Login
        </a>
        </Header>
        <Loading
          status={this.state.status}
          callback={() => {
            if (this.props.status !== STATUS.AUTHENTICATED) {
              this.setState({
                status: STATUS.AUTHENTICATED
              });
              this.props.history.push('/dashboard')
            }
          }}
        />
       
      </Container>
      )}
      </AuthConsumer>
      
    );
  }
}

export default LoginPage;


