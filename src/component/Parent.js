import React, {Component} from "react";
import Child from "./Child";


export default class Parent extends Component {
  state = {
    company: "Apple",
  };

  greetparent = (child) => {
    alert(`Hello ${this.state.company} ${child}`);
  };

  render() {
    return (
      <div>
        <Child greetHandler={this.greetparent} />
      </div>
    );

  }
}
