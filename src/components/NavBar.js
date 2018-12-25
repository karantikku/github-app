import React from "react";
import { NavLink } from "react-router-dom";


export default () => (
    <div>
        <header>
            <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
            Overview
            </NavLink>
            <NavLink to="/repositories" activeClassName="is-active">
            Repositories
            </NavLink>
        </header>
    </div>
);