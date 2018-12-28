import React from "react";

class Repository extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <div className="dashboard__repository">
        <p className="Heading">{this.props.name}</p>
        <p className="Description">{this.props.description}</p>
      </div>
    );
  }
}

export default Repository;
