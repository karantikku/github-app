import React from "react";
import UserInfo from "./UserInfo";
import RepositoriesBlock from "./RepositoriesBlock";
import ActivityList from "./ActivityList";
export default () => (
  <div >
      <UserInfo /> 
      <div className="column middle">
        <RepositoriesBlock />
        <ActivityList />
      </div>    
  </div>
);
