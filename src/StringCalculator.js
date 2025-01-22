import React from 'react';
import { Text, View } from 'react-native';

const StringCalculator = () => {
    return (
        <View>
            <Text>String Calculator</Text>
        </View>
    );
}

export function add(numbers) {
    // implementation
    if (numbers === "") {
        return 0;
    }

    const numArray = numbers.split(/,|\n/).map(Number);
    if (!numbers.includes(",") && !numbers.includes("\n")) {
        return parseInt(numbers, 10);
    }

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives numbers not allowed: ${negatives.join(",")}`);
    }

    if (numbers !== "" && (numbers.includes(",") || numbers.includes("\n"))) {
        return numArray.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;