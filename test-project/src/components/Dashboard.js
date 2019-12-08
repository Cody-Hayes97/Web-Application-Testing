import React, { useState } from "react";
import { Display } from "./Display";

export const Dashboard = () => {
  const [strike, setStrike] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div>
      <Display strikes={strike} balls={balls} />
      <button
        data-testid="ball-btn"
        className="balls"
        onClick={() => {
          if (balls < 3) {
            setBalls(balls + 1);
          } else {
            setBalls(0);
          }
        }}
      >
        Ball
      </button>
      <button
        className="strikes"
        onClick={() => {
          if (strike < 2) {
            setStrike(strike + 1);
          } else {
            setStrike(0);
          }
        }}
      >
        Strike
      </button>
      <button
        className="foul"
        onClick={() => {
          if (strike < 2) {
            setStrike(strike + 1);
          } else if (strike >= 2) {
            return null;
          }
        }}
      >
        Foul
      </button>
      <button
        className="hit"
        onClick={() => {
          setBalls(0);
          setStrike(0);
        }}
      >
        Hit
      </button>
    </div>
  );
};
