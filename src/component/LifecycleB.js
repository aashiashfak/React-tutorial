import React, { Component } from 'react'

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aashi",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(Props, state) {
    return null;
    console.log("LifecycleB getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB rendor");
    return <div>LifecycleB</div>;
  }
}


export default LifecycleB
