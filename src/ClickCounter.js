import React, { Component } from 'react'
import updatedComponent from './NewComponent'

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {this.props.counter} {this.props.name}
        </button>
      </div>
    );
  }
}

export default updatedComponent(ClickCounter,1);


// serarching for ClickCounter
