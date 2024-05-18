import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LlifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Aashi'
      }
      console.log("LifecycleA constructor");
    }

    // static getDerivedStateFromProps(Props,state){
    //     return null 
    //     console.log("LifecycleA getDerivedStateFromProps");
    // }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }


    
  render() {
    console.log("LifeCycleA rendor");
    return (
      <div>
        <LifecycleB/>
      </div>
    )
  }
}

export default LlifecycleA

