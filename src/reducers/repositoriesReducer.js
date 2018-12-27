import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_RESPONSE
} from "../actions/repositories";

const defaultRepositoryState = {
  repositories: [],
  isFetching: false,
  requestedAt: ""
};

export const repositoriesReducer = (state = defaultRepositoryState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_REPOSITORIES_RESPONSE:
      return {
        ...state,
        repositories: action.repositories,
        isFetching: action.isFetching,
        requestedAt: Date.now()
      };
    default:
      return state;
  }
};
