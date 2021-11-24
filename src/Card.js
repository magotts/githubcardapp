import React from "react";

const Card = (props) => {
  // const profile = this.props;

  console.log(props);
  return (
    <div className="gitbox">
    <div className="github-profile">
      <img className="profile-img" src={props.avatar_url} alt="profile pic" />
      <div className="profile-info">
        <div className="profile-name">Username: {props.login}</div>
        <div className="profile-name">Name: {props.name}</div>
        <div className="company">{props.company}</div>
        <div className="profile-name">{props.location}</div>
        <div className="profile-name"><a href={props.html_url} target="_blank">GitHub</a></div>

      </div>
    </div>
    </div>
  );
};

export default Card;
