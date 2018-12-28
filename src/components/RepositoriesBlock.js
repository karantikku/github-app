import React from "react";
import Repository from "./Repository";
import { connect } from "react-redux";
import { fetchRepositoriesFromAPI } from "../actions/repositories";

class RepositoriesBlock extends React.Component {
  componentDidMount(props) {
    this.props.dispatch(fetchRepositoriesFromAPI());
  }

  render() {
    return (
      <div className="column middle">
        <h6 className="Title">Repositories</h6>
        {this.props.repositories.repositories.map(repository => {
          return (
            <Repository
              name={repository.name}
              description={repository.description}
              key={repository.node_id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories
  };
};

export default connect(mapStateToProps)(RepositoriesBlock);
