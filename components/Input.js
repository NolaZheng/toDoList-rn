import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const Input = (props) => {
  const [enteredInput, setInput] = useState('')
  const inputHandler = (enterText) => {
    setInput(enterText)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter New TODO"
        style={styles.input}
        onChangeText={(value) => inputHandler(value)}
      />
      <Button title="ADD" onPress={props.onAddTodo.bind(this, enteredInput)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
})

export default Input
