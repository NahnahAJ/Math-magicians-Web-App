import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../index.css';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import QuotePage from '../pages/QuotePage';

function Calculator() {
  const [state, addState] = useState({ total: 0, next: null, operation: null });

  const addLogic = (e) => {
    addState((state) => calculate(state, e.target.name));
  };

  const populateFunc = () => {
    const numbers = [];
    for (let i = 1; i < 10; i += 1) {
      numbers.push(
        <button name={i} type="button" key={i} onClick={addLogic}>
          {i}
        </button>,
      );
    }
    return numbers;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/calculator"
          element={(
            <div className="mainUI">
              <h2>Let&apos;s do some math!</h2>
              <div className="calculator">
                <div className="display">
                  <span>{state.total}</span>
                  <span>{state.operation}</span>
                  <span>{state.next}</span>
                </div>
                <div className="grid">
                  <div className="row1">
                    <button name="AC" type="button" onClick={addLogic}>
                      AC
                    </button>
                    <button name="+/-" type="button" onClick={addLogic}>
                      +/-
                    </button>
                    <button name="%" type="button" onClick={addLogic}>
                      %
                    </button>
                    {populateFunc()}
                    <button
                      name="0"
                      type="button"
                      className="zero"
                      onClick={addLogic}
                    >
                      0
                    </button>
                    <button name="." type="button" onClick={addLogic}>
                      .
                    </button>
                  </div>

                  <div className="column4">
                    <button name="÷" type="button" onClick={addLogic}>
                      ÷
                    </button>
                    <button name="x" type="button" onClick={addLogic}>
                      x
                    </button>
                    <button name="-" type="button" onClick={addLogic}>
                      -
                    </button>
                    <button name="+" type="button" onClick={addLogic}>
                      +
                    </button>
                    <button name="=" type="button" onClick={addLogic}>
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </>
  );
}

export default Calculator;
