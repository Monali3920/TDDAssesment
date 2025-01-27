import React from 'react';
import { add } from './StringCalculator';
import { render, fireEvent } from '@testing-library/react-native';
import StringCalculator from './StringCalculator';

describe('StringCalculator', () => {
    test('renders correctly', () => {
        const { getByPlaceholderText, getByText } = render(<StringCalculator />);
        expect(getByPlaceholderText('Enter numbers separated by commas')).toBeTruthy();
        expect(getByText('Calculate')).toBeTruthy();
    });

    test('handles new lines as delimiters', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<StringCalculator />);
        const input = getByPlaceholderText('Enter numbers separated by commas');
        const button = getByText('Calculate');

        fireEvent.changeText(input, '1\n2,3');
        fireEvent.press(button);

        expect(queryByText('Result: 6')).toBeTruthy();
    });

    test('displays error message for negative numbers', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<StringCalculator />);
        const input = getByPlaceholderText('Enter numbers separated by commas');
        const button = getByText('Calculate');

        fireEvent.changeText(input, '-1,2');
        fireEvent.press(button);

        expect(queryByText('negatives numbers not allowed')).toBeNull();
    });
});