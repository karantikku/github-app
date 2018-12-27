import React from "react";
import UserInfo from "./UserInfo";
import RepositoriesBlock from "./RepositoriesBlock";
import ActivityList from "./ActivityList";
export default () => (
  <div>
    <h1>
      <UserInfo />
      <RepositoriesBlock />
      <ActivityList />
    </h1>
  </div>
);
