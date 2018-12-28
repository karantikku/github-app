import React from "react";
import UserInfo from "./UserInfo";
import RepositoriesBlock from "./RepositoriesBlock";
import ActivityList from "./ActivityList";
export default () => (
  <div className="wrapper">
    <div className="row">
      <div class="column">
        <UserInfo />
      </div>
      <div class="column">
        <div className="info-block">
          <RepositoriesBlock />
          <ActivityList />
        </div>
      </div>
    </div>
  </div>
);
