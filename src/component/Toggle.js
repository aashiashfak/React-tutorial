import {Component} from "react";
class Toggle extends Component {
  state = {
    on: true,
  };

  toggle = () => {
    this.setState((prevState) => ({
      on: !prevState.on,
    }));
  };

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
