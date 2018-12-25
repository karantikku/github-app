
export const FETCH_REPOSITORIES_REQUEST = "FETCH_REPOSITORIES_REQUEST";
//export const FETCH_QOD_FAILURE = "FETCH_QOD_FAILURE";
export const FETCH_REPOSITORIES_RESPONSE = "FETCH_REPOSITORIES_RESPONSE";


export const fetchRepositories = () => {
  return {
    type: FETCH_REPOSITORIES_REQUEST,
    isFetching: true
  };
};

export const recieveRepositories = json => {
  return {
    type: FETCH_REPOSITORIES_RESPONSE,
    repositories: json,
    isFetching: false,
    receivedAt: Date.now()
  };
};



export const fetchRepositoriesFromAPI = () => {
  return dispatch => {
    dispatch(fetchRepositories());
    return fetch(`https://api.github.com/users/karantikku/repos`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
          dispatch(recieveRepositories(json))
      }
      );
  };
};
