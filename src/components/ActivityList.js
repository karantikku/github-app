import React from "react";
import ActivityItem from "./ActivityItem";
import { connect } from "react-redux";
import { fetchACTIVITIESFromAPI } from "../actions/activities";

class ActivityList extends React.Component {
  componentDidMount(props) {
    this.props.dispatch(fetchACTIVITIESFromAPI());
  }

  render() {
    return (
      <div className="column middle">
        <h6 className="Title">Contributions</h6>
        {this.props.activities.activities.map(activity => {
          return (
            <ActivityItem
              name={activity.repo.name}
              description={activity.type}
              key={activity.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps)(ActivityList);
