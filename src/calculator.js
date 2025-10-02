// Функции калькулятора
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Деление на ноль!');
  }
  return a / b;
}

// Основная функция для вычислений
function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = 'Пожалуйста, введите оба числа';
    resultElement.style.color = 'red';
    return;
  }

  try {
    let result;
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      default:
        throw new Error('Неизвестная операция');
    }

    resultElement.textContent = `Результат: ${result}`;
    resultElement.style.color = 'green';
  } catch (error) {
    resultElement.textContent = `Ошибка: ${error.message}`;
    resultElement.style.color = 'red';
  }
}

// Экспортируем функции для тестов
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add, subtract, multiply, divide };
}
