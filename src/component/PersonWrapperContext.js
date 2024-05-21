import React, { Component } from 'react'
import PersonContextConsuming from './PersonContextConsuming'

export class PersonWrapperContext extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <PersonContextConsuming/>
      </div>
    )
  }
}

export default PersonWrapperContext
