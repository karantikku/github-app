import React from 'react';
import {
    Header,
    Logo,
    Logotype
  } from "gitstar-components";
import { AuthConsumer } from './AuthContext'

export default () => (
    <AuthConsumer>
    {({ logout }) => (
        <Header>
    <div style={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <Logotype />
          </div>
          <button
          onClick={logout}
        >
          Logout
        </button>
    </Header>
    )}
    </AuthConsumer>
);