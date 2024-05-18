import React, {Component} from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCount from "./HoverCount";
// import Hero from "./component/Hero";
// import ErrorBoundary from "./component/ErrorBoundary";
// import ListRendering from "./component/ListRendering";
// import Parent from "./component/Parent";
// import ConditionalRendering from "./component/ConditionalRendering";
// import Subscribe from "./component/Subscribe";
// import Todo from "./component/Todo";
// import Counter from "./component/Counter";
// import Forms from "./component/Forms";
// import LlifecycleA from "./component/LlifecycleA";
// import List from "./component/List";
// import { Greet } from './component/Greet';

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
        {/* <List/> */}
        {/* <Greet name="Abhinav" score="10" />
        <Greet name="Sahal" score="15" />
        <Greet name="Ashwin" score="134">
          <h6>player Wins</h6>{" "}
        </Greet> */}
        {/* <Parent/> */}
        {/* <Subscribe/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListRendering/> */}
        {/* <LlifecycleA/> */}
        {/* <ErrorBoundary>
          <Hero heroName={"BatMan"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"SuperMan"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"Joker"} />
        </ErrorBoundary> */}
        <ClickCounter name='Aashi' />
        <HoverCount />
      </div>
    );
  }
}
export default App;
