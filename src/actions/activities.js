export const FETCH_ACTIVITIES_REQUEST = "FETCH_ACTIVITIES_REQUEST";
//export const FETCH_QOD_FAILURE = "FETCH_QOD_FAILURE";
export const FETCH_ACTIVITIES_RESPONSE = "FETCH_ACTIVITIES_RESPONSE";

export const fetchACTIVITIES = () => {
  return {
    type: FETCH_ACTIVITIES_REQUEST,
    isFetching: true
  };
};

export const recieveACTIVITIES = json => {
  return {
    type: FETCH_ACTIVITIES_RESPONSE,
    ACTIVITIES: json,
    isFetching: false,
    receivedAt: Date.now()
  };
};

export const fetchACTIVITIESFromAPI = () => {
  return dispatch => {
    dispatch(fetchACTIVITIES());
    return fetch(`https://api.github.com/users/karantikku/events`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        dispatch(recieveACTIVITIES(json));
      });
  };
};
