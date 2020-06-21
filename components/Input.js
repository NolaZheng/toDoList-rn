import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const Input = props => {
  const [enteredInput, setInput] = useState('')
  const inputHandler = enterText => {
    setInput(enterText)
  }
  const addTodoHandler = () => {
    props.onAddTodo(enteredInput)
    setInput('')
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter New TODO"
          style={styles.input}
          onChangeText={value => inputHandler(value)}
        />
        <View style={styles.btnContainer}>
          <Button title="CANCEL" color="red" onPress={props.closeModal} />
          <Button title="ADD" onPress={addTodoHandler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
})

export default Input
