import React, { Component } from "react";
import CustomInput from "./CustomInput";
import CountryList from "./CountryList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      countries: [{ id: "macedonia", value: "Macedonia", edit: false }],
    };
  }

  changeCountryName = event => {
    this.setState({
      countryName: event.target.value,
    });
  };

  addCountryName() {
    const { countryName, countries } = this.state;
    if (
      countries.length > 0 &&
      !countries.some(
        currentCountry =>
          currentCountry.value.toLowerCase() === countryName.toLowerCase()
      )
    ) {
      this.setState({
        countryName: "",
        countries: [
          ...countries,
          { id: countryName.toLowerCase(), value: countryName, edit: false },
        ],
      });
    } else {
      alert("YOU SHOULD INPUT A NOT EXISTING COUNTRY INSIDE THE INPUT FIELD");
    }
  }

  deleteCountry = countryName => {
    this.setState({
      countries: this.state.countries.filter(
        country => country !== countryName
      ),
    });
  };

  editCountry = id =>
    this.setState({
      countries: this.state.countries.map(country => {
        if (country.id === id) {
          return { ...country, edit: true };
        }
        return country;
      }),
    });

  saveCountry = (id, value) => {
    this.setState({
      countries: this.state.countries.map(country => {
        if (country.id === id) {
          return { ...country, edit: false, value };
        }
        return country;
      }),
    });
  };

  render() {
    return (
      <div>
        <CustomInput
          countryName={this.state.countryName}
          onNameChange={this.changeCountryName}
        />
        <button onClick={this.addCountryName.bind(this)}>Add Country</button>
        <hr />
        <CountryList
          countries={this.state.countries}
          onCountryDelete={this.deleteCountry}
          onCountryEdit={this.editCountry}
          onCountrySave={this.saveCountry.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
