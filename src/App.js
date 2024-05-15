import React, {Component} from "react";
import "./App.css";
// import Todo from "./component/Todo";
// import Counter from "./component/Counter";
// import Forms from "./component/Forms";
import List from "./component/List";

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    greet:'Hello',
    person:'Jhoan',
    age:'30'
  };
  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.greet} {this.state.person}</h1> */}
        {/* <Todo sendingData={this.state}/> */}
        {/* <Counter /> */}
        {/* <Forms/> */}
        <List/>
      </div>
    );
  }
}
export default App;
