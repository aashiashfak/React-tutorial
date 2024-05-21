import React, {Component} from "react";
import MyContext from "./MyContext";

export class ContextProvider extends Component {
  state = {
    name: "Jhoan",
    age: 34,
    place: "Malappuram",
  };

  render() {
    return (
      <div>
        <MyContext.Provider value={this.state}>
          {this.props.children}
        </MyContext.Provider>
      </div>
    );
  }
}

export default ContextProvider;
