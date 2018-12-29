import React from "react";
import UserInfo from "./UserInfo";
import RepositoriesBlock from "./RepositoriesBlock";
import ActivityList from "./ActivityList";
export default () => (
  <div className="wrapper">
    <div className="row">
      <div className="column left">
        <UserInfo />
      </div>
      <div className="column right">
        <div className="info-block">
          <RepositoriesBlock />
          <ActivityList />
        </div>
      </div>
    </div>
  </div>
);
