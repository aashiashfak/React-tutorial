import {Component} from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h1>Todo Component</h1>
        <h2>
          {" "}
          Iam {this.props.sendingData.person} Iam {this.props.sendingData.age}{" "}
          years old
        </h2>
      </div>
    );
  }
}
