import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

function AddTodo({ sumbitHandler }) {
    const [text, setText] = useState('');
    const changeHangler = val => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                placeholder="new todo..."
                onChangeText={changeHangler}
                style={styles.input}
            />
            <Button onPress={() => sumbitHandler(text)} title="add todo" color="coral" />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})
export default AddTodo
