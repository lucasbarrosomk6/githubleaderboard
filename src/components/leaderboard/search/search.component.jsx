import React from "react";
import "./search.styles.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    let toggle;
    this.state.active
      ? (toggle = "player-card")
      : (toggle = "player-card-collapsed");
    return (
      <div className={toggle}>
        <img
          className="place"
          style={
            this.state.active
              ? { width: "auto", height: "90%", marginLeft: ".5vw" }
              : { display: "none" }
          }
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/480px-Magnifying_glass_icon.svg.png"
          alt=""
        />
        <input
          type="text"
          className="bar name"
          placeholder="search here"
          style={
            this.state.active
              ? {
                  border: "none",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  height: "inherit"
                }
              : { display: "none" }
          }
        />
        <div
          className="button score"
          onClick={e =>
            this.setState(prevState => ({ active: !prevState.active }))
          }
        >
          {!this.state.active ? (
            <h3 style={{ cursor: "pointer" }}>click to add user</h3>
          ) : (
            <h3 style={{ cursor: "pointer" }}>X</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
