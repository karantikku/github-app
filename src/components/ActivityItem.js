import React from "react";

export default props => (
  <div className="dashboard__contributions">
    <span className="ListIcon" />
    <p className="Heading">{props.name}</p>
    <p className="Description">{props.description}</p>
  </div>
);
