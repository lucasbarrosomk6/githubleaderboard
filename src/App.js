import React from "react";
import axios from "axios";
import "./App.css";
import Leader from "./components/leader/leader.component.jsx";
import Leaderboard from "./components/leaderboard/leaderboard.component.jsx";

class App extends React.Component {
  state = {
    searchField: "",
    users: []
  };

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  fetchUser = async e => {
    try {
      e.preventDefault();
      this.setState({ error: false });
      const { searchField, users } = this.state;
      const query = searchField.trim();

      if (users.find(user => user.login === query) || !query) {
        this.setState({
          searchField: "",
          error: true
        });
        return;
      }

      this.setState({ loading: true });

      const { data } = await axios(`https://api.github.com/users/${query}`);

      this.setState(({ users }) => ({
        users: [...users, data],
        loading: false,
        searchField: ""
      }));
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const { users, error, loading } = this.state;
    const sortedUsers = users.sort(
      (a, b) => b.public_repos + b.followers - (a.public_repos + a.followers)
    );

    return (
      <div className="App">
        <form
          className="header"
          style={{ borderColor: error && "red" }}
          onSubmit={this.fetchUser}
        >
          <input
            type="text"
            value={this.state.searchField}
            onChange={this.handleChange}
          />
          <button>fetch</button>
        </form>
        {loading && <div>loading</div>}
        <div className="main">
          <div className="left">
            <Leader leader={sortedUsers[0]} />
          </div>
          <div className="right">
            <Leaderboard players={sortedUsers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
