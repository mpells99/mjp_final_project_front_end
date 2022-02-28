import React, { Component } from "react";

export default class CalendarBackEnd extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      FECalDateID: props.FECalDateID,
      calDateID: "",
      calDateOptions: "",
      booked: "",
    };
  }

  componentDidMount() {
    this.fetchWrapper();
  }

  fetchWrapper() {
    fetch("http://localhost:5000/calendarInfo/{FECalDateID}", {
      method: "GET",
    })
      .then(async () => {
        const tekt = await response.text();
        if (response.ok) {
          return text;
        } else {
          throw Error(text);
        }
      })
      .then((text) => {
        const calPars = JSON.parse(text);
        this.state.calDateID = calPars.calDateID;
        this.state.calDateOptions = calPars.calDateOptions;
        this.state.booked = calPars.booked;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.FECalDateID}</p>
      </div>
    );
  }
}
