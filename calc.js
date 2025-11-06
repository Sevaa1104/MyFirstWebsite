function getInputs() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Invalid";
        return null;
      }
      return { num1, num2 };
    }

    function Add() {
      const inputs = getInputs();
      if (!inputs) return;
      const sum = inputs.num1 + inputs.num2;
      document.getElementById('result').textContent = `${sum}`;
    }

    function Multiply() {
      const inputs = getInputs();
      if (!inputs) return;
      const product = inputs.num1 * inputs.num2;
      document.getElementById('result').textContent = `${product}`;
    }

    function Compare() {
      const inputs = getInputs();
      if (!inputs) return;
      const { num1, num2 } = inputs;
      let message;
      if (num1 > num2) message = `${num1}>${num2}`;
      else if (num1 < num2) message = `${num2}>${num1}`;
      else message = `${num1}=${num2}`;
      document.getElementById('result').textContent = message;
    }