import React from "react";
import "./leaderboard.styles.css";
import PlayerCard from "./player-card/player-card.component";

const Leaderboard = props => (
  <div className="leaderboard-card">
    <PlayerCard place="" name="name" score="score" />
    {props.players.map((player, index) => (
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
