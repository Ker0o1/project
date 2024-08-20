const { calculator } = require('../calculator.js');

test("Basic Operations", () => {
    expect(calculator(4, 1, '+')).toBe(5);
    expect(calculator(8, 2, '-')).toBe(6);
    expect(calculator(9, 2, '*')).toBe(18);
    expect(calculator(40, 2, '/')).toBe(20);
});

test("Invalid Operator", () => {
    expect(calculator(1, 4, '%').message).toBe("invalide operator");   
    expect(calculator(1, 4, '%').success).toBe(false);
});

test("Invalid Input", () => {
    expect(() => calculator("2", 4, '+')).toThrow("Please enter number");
    expect(() => calculator(2, "4", '+')).toThrow("Please enter number");
});

test("Division by Zero", () => {
    expect(calculator(0, 0, '/')).toBe(NaN);
    expect(calculator(7, 0, '/')).toBe(Infinity);
});