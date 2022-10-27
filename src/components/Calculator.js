import React from 'react';
import '../index.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.populateFunc = this.populateFunc.bind(this);
    this.addLogic = this.addLogic.bind(this);
  }

  addLogic = (e) => {
    this.setState((state) => calculate(state, e.target.name));
  };

  populateFunc = () => {
    const numbers = [];
    for (let i = 1; i < 10; i += 1) {
      numbers.push(
        <button name={i} type="button" key={i} onClick={this.addLogic}>
          {i}
        </button>,
      );
    }
    return numbers;
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="mainUI">
        <div className="calculator">
          <div className="display">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
          <div className="grid">
            <div className="row1">
              <button name="AC" type="button" onClick={this.addLogic}>
                AC
              </button>
              <button name="+/-" type="button" onClick={this.addLogic}>
                +/-
              </button>
              <button name="%" type="button" onClick={this.addLogic}>
                %
              </button>
              {this.populateFunc()}
              <button
                name="0"
                type="button"
                className="zero"
                onClick={this.addLogic}
              >
                0
              </button>
              <button name="." type="button" onClick={this.addLogic}>
                .
              </button>
            </div>

            <div className="column4">
              <button name="÷" type="button" onClick={this.addLogic}>
                ÷
              </button>
              <button name="x" type="button" onClick={this.addLogic}>
                x
              </button>
              <button name="-" type="button" onClick={this.addLogic}>
                -
              </button>
              <button name="+" type="button" onClick={this.addLogic}>
                +
              </button>
              <button name="=" type="button" onClick={this.addLogic}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
