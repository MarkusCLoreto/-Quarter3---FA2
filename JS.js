function printResult(message) {
    document.getElementById('result').innerHTML = message;
  }

  function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
      printResult('Please enter valid numbers.');
      return;
    }
    printResult('The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2) + '.');
  }

  function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
      printResult('Please enter valid numbers.');
      return;
    }
    printResult('The difference between ' + num1 + ' and ' + num2 + ' is ' + (num1 - num2) + '.');
  }

  function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
      printResult('Please enter valid numbers.');
      return;
    }
    printResult('The product of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2) + '.');
  }

  function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
      printResult('Please enter valid numbers.');
      return;
    }
    if (num2 === 0) {
      printResult('Division by zero is not allowed.');
      return;
    }
    printResult('The quotient of ' + num1 + ' and ' + num2 + ' is ' + (num1 / num2) + '.');
  }

  function modulus() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
      printResult('Please enter valid numbers.');
      return;
    }
    if (num2 === 0) {
      printResult('Division by zero is not allowed.');
      return;
    }
    printResult('The remainder of ' + num1 + ' divided by ' + num2 + ' is ' + (num1 % num2) + '.');
  }
