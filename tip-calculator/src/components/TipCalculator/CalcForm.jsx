import React from "react";

const CalcForm = ({ state, handleChange, calculateTotalAmount }) => {
  const predefinedTipPercentages = [10, 15, 20, 25];
  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <div className="form-group">
        <label>Bill Amount: </label>
        <input type="number" value={state.billAmount} name={"billAmount"} 
                onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Tip Percentage: </label>
        <select name={"tipPercentage"} value={state.tipPercentage} 
                onChange={handleChange}
        >
          <option value="">Custom</option>
          {predefinedTipPercentages.map((percentage) => (
            <option key={percentage} value={percentage}>
              {percentage}%
            </option>
          ))}
        </select>
        {!state.tipPercentage && (
          <input type="number" name={"customTipPercentage"} onChange={handleChange}
            value={state.customTipPercentage} placeholder="Enter custom tip %"
          />
        )}
      </div>
      <div className="form-group">
        <label>Split Count: </label>
        <input type="number" name="splitCount" value={state.splitCount}
          onChange={handleChange} min="1"
        />
      </div>
      <div className={"checkbox-group"}>
        <label>
          <input type="checkbox" name="includeTax" checked={state.includeTax} 
                onChange={handleChange}
          />{" "}
          Include Tax
        </label>
        {state.includeTax && (
          <input type="number" name="taxPercentage" placeholder="Enter tax %"
            value={state.taxPercentage}
            onChange={handleChange}
          />
        )}
      </div>
      <button onClick={calculateTotalAmount}>Calculate</button>
      <div>
        <h2>Total Amount: {state.totalAmount}</h2>
        <h2>Tip Amount: {state.tipAmount}</h2>
        <h2>Split Amount: {state.splitAmount}</h2>
      </div>
    </div>
  );
};

export default CalcForm;
