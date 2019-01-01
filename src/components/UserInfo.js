import React from "react";

export default () => (
  <div className="user">
    <img
      className="user__image"
      src={sessionStorage.getItem('userImage')}
      alt="user"
    />
    {sessionStorage.getItem('userFullName') !== "null" && <p className="user__name">{sessionStorage.getItem('userFullName')}</p>}
    <p className="user__user-name">{sessionStorage.getItem('userName')}</p>
    {sessionStorage.getItem('userLocation') !== "null" && <p className="user__user-location">{sessionStorage.getItem('userLocation')}</p>}
    {sessionStorage.getItem('userEmail') !== "null" &&<p>  
    Email:
      <span className="user_emailId">{sessionStorage.getItem('userEmail')}</span>
    </p>}
  </div>
);
