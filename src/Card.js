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
        {props.name && ( <div className="profile-name">Name: {props.name}</div> )}
{props.bio && (<details className="bio-summary">
  <summary>Bio</summary>
  <p>{props.bio}</p>
</details>)}

        {props.company && (<div className="company">Company: {props.company}</div>)}
        {props.location && ( <div className="profile-name">Location: {props.location} </div>) }
        {props.twitter_username && ( <div className="profile-name">Twitter: {props.twitter_username}</div>) }
        {props.html_url && ( <div className="profile-name"><a href={props.html_url} target="_blank">GitHub</a></div> )}
        {props.public_repos && ( <div className="profile-name">Repo Count: {props.public_repos}</div> )}
      </div>
    </div>
    </div>
  );
};

export default Card;
