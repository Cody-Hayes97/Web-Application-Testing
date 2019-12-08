import React from "react";

export const Display = props => {
  return (
    <div>
      <h1 className="display-ball">Balls: {props.balls}</h1>
      <h1>Strikes: {props.strikes}</h1>
    </div>
  );
};
