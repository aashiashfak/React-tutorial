import React, {Component} from "react";

class Subscribe extends Component {
  state = {
    message: "Welcome User",
  };

  subscribe = (e) =>
    this.setState({
      message: "Thank You",
    });

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.subscribe}>Subscribe</button>
      </div>
    );
  }
}
export default Subscribe