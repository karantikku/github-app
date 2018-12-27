import {
  FETCH_ACTIVITIES_REQUEST,
  FETCH_ACTIVITIES_RESPONSE
} from "../actions/activities";

const defaultActivityState = {
  activities: [],
  isFetching: false,
  requestedAt: ""
};

export const activitiesReducer = (state = defaultActivityState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_ACTIVITIES_RESPONSE:
      return {
        ...state,
        activities: action.ACTIVITIES,
        isFetching: action.isFetching,
        requestedAt: Date.now()
      };
    default:
      return state;
  }
};
