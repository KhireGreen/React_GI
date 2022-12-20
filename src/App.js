import "./App.css";
import React from "react";
import BasicInfo from "./component/basicInfo";

class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
        number: "",
        dob: "",
      },
      people: [
        {
          name: "Khire Green",
          number: "123-456-7890",
          dob: "03/25/1999",
        },
        {
          name: "Egypt Nelson",
          number: "098-765-4321",
          dob: "12/01/05",
        },
        {
          name: "Ray Sylvester",
          number: "555-555-5555",
          dob: "08/15/1998",
        },
      ],
    };
  }
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key="{index}" person={person} />;
    });
  }
}

// Easy challenge create constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  // Hard challenge

  render() {
    return (
      <>
        <div>
          <BasicInfo />
        </div>
      </>
    );
  }
}

export default App1;