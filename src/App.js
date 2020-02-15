import React from "react";
import "./App.css";
import Leader from "./components/leader/leader.component.jsx";
import Leaderboard from "./components/leaderboard/leaderboard.component.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      unsortedArray: []
    };
    this.fetchUser = this.fetchUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchField: e.target.value });
  }

  fetchUser() {
    fetch(`https://api.github.com/users/${this.state.searchField}`)
      .then(data => data.json())
      .then(data => {
        this.setState(prevState => ({
          unsortedArray: prevState.unsortedArray.concat(data)
        }));
      })
      .catch(error => {
        console.log(error, "something happend");
      }); //fetches the username data based on the username variable above and set it to state
    console.log(this.state.unsortedArray);
  }
  render() {
    const sortedArray = this.state.unsortedArray.sort(
      (a, b) => b.public_repos + b.followers - (a.public_repos + a.followers)
    );
    if (this.state.unsortedArray.length)
      return (
        <div className="App">
          <div className="header">
            <input
              type="text"
              value={this.state.searchField}
              onChange={this.handleChange}
            />
            <button onClick={this.fetchUser}>fetch</button>
          </div>
          <div className="main">
            <div className="left">
              <Leader leader={sortedArray[0]} />
            </div>
            <div className="right">
              <Leaderboard players={sortedArray} />
            </div>
          </div>
        </div>
      );
    if (!this.state.unsortedArray.length)
      return (
        <div className="App">
          <div className="header">
            <input
              type="text"
              value={this.state.searchField}
              onChange={this.handleChange}
            />
            <button onClick={this.fetchUser}>fetch</button>
          </div>
          <div className="main">
            <div className="left"><Leader/></div>
            <div className="right"><Leaderboard/></div>
          </div>
        </div>
      );
  }
}

export default App;
