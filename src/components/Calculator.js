import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.populateFunc = this.populateFunc.bind(this);
  }

  populateFunc = () => {
    const numbers = [];
    for (let i = 1; i < 10; i += 1) {
      numbers.push(<button type="button">{i}</button>);
    }
    return numbers;
  }

  render() {
    return (
      <div className="mainUI">
        <span>0</span>

        <div className="row1">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
        </div>

        <div className="column4">
          <button type="button">÷</button>
          <button type="button">x</button>
          <button type="button">-</button>
          <button type="button">+</button>
          <button type="button">=</button>
        </div>

        <div className="numbers">{this.populateFunc()}</div>

        <div className="row5">
          <button type="button">0</button>
          <button type="button">.</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
