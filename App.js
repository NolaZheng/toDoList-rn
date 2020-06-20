import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native'

import ToDoItem from './components/ToDoItem'

// import { ListItem } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  const [enteredInput, setInput] = useState('')
  const [newTODO, setNewTODO] = useState([])

  const inputHandler = (enterText) => {
    setInput(enterText)
  }

  const addTodoHandler = () => {
    setNewTODO((currentList) => [
      ...currentList,
      {
        key: Math.random().toString(),
        value: enteredInput,
      },
    ])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter New TODO"
          style={styles.input}
          onChangeText={(value) => inputHandler(value)}
        />
        <Button title="ADD" onPress={addTodoHandler} />
      </View>
      <FlatList
        data={newTODO}
        renderItem={(todo) => <ToDoItem content={todo.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
