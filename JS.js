function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultText = '';

    if (isNaN(num1) || isNaN(num2)) {
      resultText = 'Please enter valid numbers.';
    } else {
      if (operation === '+') {
        resultText = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2) + '.';
      } else if (operation === '-') {
        resultText = 'The difference between ' + num1 + ' and ' + num2 + ' is ' + (num1 - num2) + '.';
      } else if (operation === '*') {
        resultText = 'The product of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2) + '.';
      } else if (operation === '/') {
        resultText = num2 !== 0 ? 'The quotient of ' + num1 + ' and ' + num2 + ' is ' + (num1 / num2) + '.' : 'Division by zero is not allowed.';
      } else if (operation === '%') {
        resultText = num2 !== 0 ? 'The remainder of ' + num1 + ' divided by ' + num2 + ' is ' + (num1 % num2) + '.' : 'Division by zero is not allowed.';
      } else {
        resultText = 'Unknown operation.';
      }
    }

    document.getElementById('result').textContent = resultText;
  }