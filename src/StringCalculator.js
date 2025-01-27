import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet  } from 'react-native';

const StringCalculator = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
        try {
            setResult(add(input));
            setError(null);
        } catch (e) {
            setError(e.message);
            setResult(null);
        }
    };

    return (
     <View style={styles.container}>
        <Text> String Calculator</Text>
        <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Enter numbers separated by commas"
            keyboardType="numeric"
        />
        <Button style={styles.button}
        title="Calculate" 
        onPress={handleCalculate} />
        {result !== null && <Text style={styles.result}>Result: {result}</Text>}
        {error && <Text style={styles.error}>{error}</Text>}
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

// export function add(numbers) {
//     if (numbers === "") {
//         return 0;
//     }

//     const numArray = numbers.split(/,|\n/).map(Number);
//     const negatives = numArray.filter(num => num < 0);
//     if (negatives.length > 0) {
//         throw new Error(`negatives not allowed: ${negatives.join(",")}`);
//     }

//     return numArray.reduce((sum, num) => sum + num, 0);
// }

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        color: 'black'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginBottom: 30,
        paddingHorizontal: 8,
        paddingVertical: 4,
        top: 20
    },
    button: {
        top: 20,
        marginBottom: 16,
    },
    result: {
        marginTop: 16,
        fontSize: 18,
        textAlign: 'center',
    },
    error: {
        marginTop: 16,
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default StringCalculator;