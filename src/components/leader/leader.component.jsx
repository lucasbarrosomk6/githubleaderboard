import React from "react";
import "./leader.styles.css";

const Leader = props => (
  <div className="leader-card">
    {props.leader ? (
      <div className="leader-card">
        <img src={props.leader.avatar_url} alt={props.leader.login} />
        <h3>{props.leader.login}</h3>
        <div>
          <h4>total repos: {props.leader.public_repos}</h4>
          <h4>total followers: {props.leader.followers}</h4>
          <h4>
            total score: {props.leader.followers + props.leader.public_repos}
          </h4>
        </div>
      </div>
    ) : (
      <h3 style={{color:"orangeRed"}}>Add a user to begin</h3>
    )}
  </div>
);
export default Leader;
