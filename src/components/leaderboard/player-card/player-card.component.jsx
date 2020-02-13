import React from "react";
import "./player-card.styles.css";
let active = false;
const toggleActive = () => !active;
class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players,
      active: false
    };
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleActive() {
    this.setState({ active: !this.state.active });
  }
  render() {
    const { place, name, score } = this.state.players;
    if (!this.state.active)
      return (
        <div className="player-card" onClick={toggleActive}>
          <p className="place">{place}</p>
          <p className="name">{name}</p>
          <p className="score">{score}</p>
        </div>
      );
    else
      return (
        <div className="player-card" onClick={toggleActive}>
          <p className="place">{place}</p>
          <p className="name">{name}</p>
          <p className="score">{score}</p>
        </div>
      );
  }
}
export default PlayerCard;
