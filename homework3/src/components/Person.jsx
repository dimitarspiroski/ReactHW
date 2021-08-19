import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [props.people],
      renderDetails: false,
    };
  }

  detailsHandler = () => {
    this.setState({
      renderDetails: !this.state.renderDetails,
    });
  };

  render() {
    const { person } = this.props;
    return (
      <li>
        <h3 className={this.state.renderDetails && "person-name"}>
          {person.name}
        </h3>
        <button className="toggle-button" onClick={this.detailsHandler}>
          {!this.state.renderDetails ? "Show" : "Hide"}
        </button>
        {!this.state.renderDetails ? null : (
          <ul className="details-list">
            <li>Height: {person.height}</li>
            <li>Mass: {person.mass}</li>
            <li>Birth Year: {person.birth_year}</li>
            <li>Gender: {person.gender}</li>
            <li>Hair Color: {person.hair_color}</li>
          </ul>
        )}
      </li>
    );
  }
}

export default Person;
