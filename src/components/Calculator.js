import React from 'react';
import '../index.css';

const populateFunc = () => {
  const numbers = [];
  for (let i = 1; i < 10; i += 1) {
    numbers.push(
      <button name={i} type="button" key={i}>
        {i}
      </button>,
    );
  }
  return numbers;
};

function Calculator() {
  return (
    <div className="mainUI">
      <div className="calculator">
        <div className="display">
          <span>0</span>
        </div>
        <div className="grid">
          <div className="row1">
            <button name="AC" type="button">
              AC
            </button>
            <button name="+/-" type="button">
              +/-
            </button>
            <button name="%" type="button">
              %
            </button>
            {populateFunc()}
            <button name="0" type="button" className="zero">
              0
            </button>
            <button name="." type="button">
              .
            </button>
          </div>

          <div className="column4">
            <button name="÷" type="button">
              ÷
            </button>
            <button name="x" type="button">
              x
            </button>
            <button name="-" type="button">
              -
            </button>
            <button name="+" type="button">
              +
            </button>
            <button name="=" type="button">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
