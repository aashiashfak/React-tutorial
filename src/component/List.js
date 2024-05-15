import React, {PureComponent} from "react";

class List extends PureComponent {
  state = {
    score: 5,
    data: [
      {
        id: 1,
        name: "Jhoan",
        age: 30,
      },
      {
        id: 2,
        name: "Mathew",
        age: 35,
      },
    ],
  };

  // componentDidMount() {
  //   alert("Shall we start");
  // }

  incrementScore = () => {
    this.setState({
      score: 10,
    });
  };

  render() {
    console.log(this.state.score);
    return (
      <div>
        <h1>List Component</h1>
        <button onClick={this.incrementScore}>Score</button>
        <ul>
          {this.state.data.map((value, index) => (
            <li key={value.id}>
              {value.id} - {value.name} - {value.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default List;
