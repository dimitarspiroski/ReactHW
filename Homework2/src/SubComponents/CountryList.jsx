import React from "react";

export default class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
    };
  }
  changeEditName = e => {
    this.setState({
      countryName: e.target.value,
    });
  };

  render() {
    const { countries, onCountryDelete, onCountryEdit, onCountrySave } =
      this.props;
    return (
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.value}
            <button onClick={() => onCountryDelete(country)}>X</button>
            {!country.edit ? (
              <button
                onClick={() => {
                  onCountryEdit(country.id);
                  this.setState({
                    countryName: country.value,
                  });
                }}
              >
                Edit
              </button>
            ) : (
              <div>
                <input
                  className="edit-input"
                  value={this.state.countryName}
                  onChange={this.changeEditName}
                ></input>
                <button
                  onClick={() =>
                    onCountrySave(country.id, this.state.countryName)
                  }
                >
                  Save
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
}
