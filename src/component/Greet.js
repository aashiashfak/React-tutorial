import React from "react";

export const Greet = (props) => {
  const {name, score} = props;
  return (
    <div>
      <h1>
        Hello {name}! you got {score} scores
      </h1>
      {props.children}
    </div>
  );
};
