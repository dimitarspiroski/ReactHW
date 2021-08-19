import React, { Component } from "react";
import PropTypes from "prop-types";
import Person from "./Person";

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [props.people],
      total: null,
      next: null,
      previous: null,
      renderDetails: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Total: {this.props.total} </h2>
        <h3>For more details click on the "Show" button.</h3>
        <ul>
          {this.props.people.map((person, index) => (
            <Person person={person} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

PeopleList.defaultProps = {
  people: [],
};

PeopleList.propTypes = {
  people: PropTypes.array,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PeopleList;
