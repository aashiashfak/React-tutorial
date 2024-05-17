import React, {Component} from "react";

export default class ConditionalRendering extends Component {
  state = {
    loggedIn: 0
  };
  render() {
    // if (this.state.loggedIn) {
    //   return <div>Hello Aashi</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }

    // let message;
    // if (this.state.loggedIn) {
    //   message = "Hello vishwas";
    // } else {
    //   message = "Hello Guest";
    // }
    // return <div>{message}</div>;

    return (
    this.state.loggedIn ?
    <div> Welcome Aashi</div> :
    <div>Welcome Guest</div>
    )

    // return this.state.loggedIn && <div>Welcome Aashi</div>
    
  }
}
