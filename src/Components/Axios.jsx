//npm install use-axios-client --force
import React from "react";
//npm install axios
import axios from "axios";

//Axios Demo
export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div
        style={{
          marginLeft: 200,
          marginTop: 100,
        }}>
        <h1>AXIOS DEMO</h1>
        <ul
          style={{
            color: "blue",
            padding: 2,
          }}>
          {
          this.state.persons.map((person) => (
            <li key={person.id}>
              {person.name}
              <br></br>
              {person.email}
              <hr></hr>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}
