import { Component } from "react";

class Codewars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://www.codewars.com/api/v1/users/" + this.props.username)
      .then((res) => res.json())
      .then((user) => this.setState({ user, isLoaded: true }))
      .catch((err) => alert(err.message));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h2>{this.state.user.username}</h2>
          <p>{this.state.user.ranks.overall.rank}</p>
          <p>{this.state.user.honor}</p>
          <p>{this.state.user.clan}</p>
        </div>
      );
    } else {
      return <span>Loading...</span>;
    }
  }
}

export default Codewars;
