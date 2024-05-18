import React, {Component} from "react";

class Forms extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

  state = {
    firstName: "",
    lastName: "",
    email: "",
  };

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}\n${this.state.email}`
    );
    console.log(
      `${this.state.firstName} ${this.state.lastName}\n${this.state.email}`
    );
    event.preventDefault();
  };

  componentDidMount(){
    console.log(this.inputRef)
    this.inputRef.current.focus()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Form Component</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.onHandleChange}
          ref={this.inputRef}
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
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={this.state.email}
          onChange={this.onHandleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Forms;
