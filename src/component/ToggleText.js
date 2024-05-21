import React, {Component} from "react";
import Toggle from "./Toggle";

class ToggleText extends Component {
  render() {
    return (
      <div>
        <Toggle
          render={({on, toggle}) => (
            <>
              <p>{on ? "HELLO" : "GOODBYE"}</p>
              <button onClick={toggle}>{on ? "Thankyou" : "Welcome"}</button>
            </>
          )}
        />
      </div>
    );
  }
}

export default ToggleText;
