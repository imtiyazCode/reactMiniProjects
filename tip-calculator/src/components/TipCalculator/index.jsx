import React, { useState } from "react";
import "./index.css";


function TipCalculator() {
 const [billAmount, setBillAmount] = useState("");
 const [tipPercentage, setTipPercentage] = useState("");
 const [customTipPercentage, setCustomTipPercentage] = useState("");
 const [totalAmount, setTotalAmount] = useState(0);
 const [tipAmount, setTipAmount] = useState(0);
 const [splitCount, setSplitCount] = useState(1);
 const [splitAmount, setSplitAmount] = useState(0);
 const [includeTax, setIncludeTax] = useState(false);
 const [taxPercentage, setTaxPercentage] = useState("");


 const predefinedTipPercentages = [10, 15, 20, 25];


 const handleBillAmountChange = (e) => {
   setBillAmount(e.target.value);
 };


 const handleTipPercentageChange = (e) => {
   setTipPercentage(e.target.value);
 };


 const handleCustomTipPercentageChange = (e) => {
   setCustomTipPercentage(e.target.value);
   setTipPercentage("");
 };


 const handleSplitCountChange = (e) => {
   setSplitCount(e.target.value);
 };


 const handleIncludeTaxChange = (e) => {
   setIncludeTax(e.target.checked);
 };


 const handleTaxPercentageChange = (e) => {
   setTaxPercentage(e.target.value);
 };


 const calculateTotalAmount = () => {
   let bill = parseFloat(billAmount);
   let tip = 0;


   if (includeTax && taxPercentage) {
     const tax = (bill * parseFloat(taxPercentage)) / 100;
     bill += tax;
   }


   if (tipPercentage) {
     tip = (bill * parseFloat(tipPercentage)) / 100;
   } else if (customTipPercentage) {
     tip = (bill * parseFloat(customTipPercentage)) / 100;
   }


   const total = bill + tip;
   const split = total / splitCount;


   setTotalAmount(total.toFixed(2));
   setTipAmount(tip.toFixed(2));
   setSplitAmount(split.toFixed(2));
 };


 return (
    <div className="tip-calculator-containor">
   <div className="tip-calculator">
     <h1>Tip Calculator</h1>
     <div className="form-group">
       <label>Bill Amount: </label>
       <input
         type="number"
         value={billAmount}
         onChange={handleBillAmountChange}
       />
     </div>
     <div className="form-group">
       <label>Tip Percentage: </label>
       <select value={tipPercentage} onChange={handleTipPercentageChange}>
         <option value="">Custom</option>
         {predefinedTipPercentages.map((percentage) => (
           <option key={percentage} value={percentage}>
             {percentage}%
           </option>
         ))}
       </select>
       {!tipPercentage && (
         <input
           type="number"
           placeholder="Enter custom tip %"
           value={customTipPercentage}
           onChange={handleCustomTipPercentageChange}
         />
       )}
     </div>
     <div className="form-group">
       <label>Split Count: </label>
       <input
         type="number"
         value={splitCount}
         onChange={handleSplitCountChange}
         min="1"
       />
     </div>
     <div className={"checkbox-group"}>
       <label>
         <input
           type="checkbox"
           checked={includeTax}
           onChange={handleIncludeTaxChange}
         />{" "}
         Include Tax
       </label>
       {includeTax && (
         <input
           type="number"
           placeholder="Enter tax %"
           value={taxPercentage}
           onChange={handleTaxPercentageChange}
         />
       )}
     </div>
     <button onClick={calculateTotalAmount}>Calculate</button>
     <div>
       <h2>Total Amount: {totalAmount}</h2>
       <h2>Tip Amount: {tipAmount}</h2>
       <h2>Split Amount: {splitAmount}</h2>
     </div>
   </div>
    </div>
 );
}


export default TipCalculator;