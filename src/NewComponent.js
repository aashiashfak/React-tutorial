import React, {Component} from "react";
const updatedComponent = (OrginalComponent, incrementNumber) => {
  class NewComponent extends Component {
    state = {
      counter: 0,
    };

    incrementCount = () => {
      this.setState({
        counter: this.state.counter + incrementNumber,
      });
      console.log(incrementNumber);
    };

    render() {
      return (
        <div>
          <OrginalComponent
            counter={this.state.counter}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default updatedComponent;
