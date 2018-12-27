import React from "react";

export default props => (
  <div className="dashboard__repository">
    <p>{props.name}</p>
    <p>{props.description}</p>
  </div>
);
