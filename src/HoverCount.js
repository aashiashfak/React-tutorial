import React, { Component } from 'react'
import updatedComponent from './NewComponent';

export class HoverCount extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCount}>
          {this.props.counter} times
        </h1>
      </div>
    );
  }
}

export default updatedComponent(HoverCount ,5)
