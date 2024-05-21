import React, { Component } from 'react'
import MyContext from './MyContext'


export class PersonContextConsuming extends Component {
    // static contextType = MyContext

  

  render() {
    const {name,age,place}= this.context
    return (
      <div>
        <p>Iam {name}. Iam {age}. from {place}</p>        
      </div>
    )
  }
}
PersonContextConsuming.contextType = MyContext;
export default PersonContextConsuming
