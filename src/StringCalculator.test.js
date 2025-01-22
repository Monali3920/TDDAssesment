import { add } from './StringCalculator';

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
        expect(add("10,20")).toBe(30);
    });

    test('should return the sum of multiple numbers separated by commas', () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("10,20,30")).toBe(60);
    });

    test('should handle new lines as delimiters', () => {
        expect(add("1\n2")).toBe(3);
        expect(add("1\n2,3")).toBe(6);
    });

    test('should handle a mix of commas and new lines as delimiters', () => {
        expect(add("1,2\n3")).toBe(6);
        expect(add("10\n20,30")).toBe(60);
    });

    test('negative numbers not allowed', () => {
        expect(() => add("-1,2")).toThrow("negatives numbers not allowed: -1");
        expect(() => add("2,-4,3,-5")).toThrow("negatives numbers not allowed: -4,-5");
    });
});