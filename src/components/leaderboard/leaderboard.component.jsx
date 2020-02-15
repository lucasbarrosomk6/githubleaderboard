import React from "react";
import "./leaderboard.styles.css";
import PlayerCard from "./player-card/player-card.component";

const Leaderboard = props => (
  <div className="leaderboard-card">
    <PlayerCard place="" name="name" score="score" />

    {
    props.players?props.players.map((player, index) => (
      <PlayerCard
        key={player.id}
        place={index + 1}
        name={player.login}
        score={player.public_repos + player.followers}
      />
    )):
    <div className="no-data-display">
       <PlayerCard
        place="1"
        name= "example 1"
        score="20"
      />
      <PlayerCard
      place="2"
      name= "example 2"
      score="10"
    />
    <PlayerCard
    place="3"
    name= "example 3"
    score="4"
  />
    </div>
   
    }
  </div>
);

export default Leaderboard;
