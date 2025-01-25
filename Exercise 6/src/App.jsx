import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }

    let calculation;
    switch (operator) {
      case "+":
        calculation = number1 + number2;
        break;
      case "-":
        calculation = number1 - number2;
        break;
      case "*":
        calculation = number1 * number2;
        break;
      case "/":
        calculation =
          number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        calculation = "Invalid operator";
        break;
    }
    setResult(calculation);
  };

  return (
    <div className="calculator-container">
      <h2>Basic Calculator</h2>

      <div className="calculator-form">
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      {result !== null && (
        <div className="result">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Calculator;
