const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Калькулятор', () => {
  test('сложение двух чисел', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('вычитание двух чисел', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
  });

  test('умножение двух чисел', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test('деление двух чисел', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
  });

  test('деление на ноль выбрасывает ошибку', () => {
    expect(() => divide(5, 0)).toThrow('Деление на ноль!');
  });
});
