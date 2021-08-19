import React, { Component } from "react";
import PeopleList from "./PeopleList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      total: null,
    };
  }

  componentDidMount() {
    this.fetchSwapiPeople();
  }

  fetchSwapiPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const formattedResponse = await response.json();
    this.setState({
      people: formattedResponse.results,
      total: formattedResponse.count,
      next: formattedResponse.next,
      previous: formattedResponse.previous,
    });
  };

  render() {
    return (
      <div>
        <h1>Swapi People</h1>
        <PeopleList people={this.state.people} total={this.state.total} />
      </div>
    );
  }
}

export default Home;
