import React from "react";
import Header from './Header'
import UserInfo from "./UserInfo";
import RepositoriesBlock from "./RepositoriesBlock";
import ActivityList from "./ActivityList";
class DashboardPage extends React.Component {
 
  render() {
    return (
       <div className="wrapper">
       <Header />
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
  }
};

export default DashboardPage;