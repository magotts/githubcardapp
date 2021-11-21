import React from "react";

const Card = (props) => {
  // const profile = this.props;
  return (
    <div className="github-profile">
      <img className="profile-img" src={props.avatar_url} alt="profile pic" />
      <div className="profile-info">
        <div className="profile-name">{props.name}</div>
        <div className="company">{props.company}</div>
      </div>
    </div>
  );
};

export default Card;
