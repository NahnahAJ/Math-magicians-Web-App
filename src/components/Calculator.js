import React from 'react';
import '../index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.populateFunc = this.populateFunc.bind(this);
  }

  populateFunc = () => {
    const numbers = [];
    for (let i = 1; i < 10; i += 1) {
      numbers.push(
        <button type="button" key={i}>
          {i}
        </button>,
      );
    }
    return numbers;
  };

  render() {
    return (
      <div className="mainUI">
        <div className="calculator">
          <div className="display">
            <span>0</span>
          </div>
          <div className="grid">
            <div className="row1">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
              {this.populateFunc()}
              <button type="button" className="zero">0</button>
              <button type="button">.</button>
            </div>

            <div className="column4">
              <button type="button">÷</button>
              <button type="button">x</button>
              <button type="button">-</button>
              <button type="button">+</button>
              <button type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
