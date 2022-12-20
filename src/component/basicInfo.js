import "../App.css";
import React, { Component } from "react";

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="information">
        <ul>
          <li>{this.props.person.name}</li>
          <li>{this.props.person.number}</li>
          <li>{this.props.person.dob}</li>
        </ul>
      </div>
    );
  }
}