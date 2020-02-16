import React from "react";
import "./leaderboard.styles.css";
import PlayerCard from "./player-card/player-card.component";

const defaults = [
  { login: "example 1", public_repos: 0, followers: 0 },
  { login: "example 1", public_repos: 0, followers: 0 },
  { login: "example 1", public_repos: 0, followers: 0 }
];

const Leaderboard = props => (
  <div className="leaderboard-card">
    <PlayerCard place="" name="name" score="score" />

    {props.players.length
      ? props.players.map((player, index) => (
          <PlayerCard
            key={player.id}
            place={index + 1}
            name={player.login}
            score={player.public_repos + player.followers}
          />
        ))
      : defaults.map((player, index) => (
          <PlayerCard
            key={player.id}
            place={index + 1}
            name={player.login}
            score={player.public_repos + player.followers}
          />
        ))}
  </div>
);

export default Leaderboard;
