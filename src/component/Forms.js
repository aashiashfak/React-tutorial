import React, {Component} from "react";

class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    console.log(`${this.state.firstName} ${this.state.lastName}` );
  };
  render() {
    return (
      <form action="">
        <h1>Form Component</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.onHandleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.onHandleChange}
        />
        <br />
        <button type="button" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Forms;
