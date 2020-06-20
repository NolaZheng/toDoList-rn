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
import Input from './components/Input'
// import { ListItem } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  const [newTODO, setNewTODO] = useState([])

  const addTodoHandler = enteredInput => {
    setNewTODO(currentList => [
      ...currentList,
      {
        key: Math.random().toString(),
        value: enteredInput,
      },
    ])
  }

  const removeTodoHandler = toDoId => {
    setNewTODO(currentList => {
      return currentList.filter(el => el.key !== toDoId)
    })
  }

  return (
    <View style={styles.screen}>
      <Input onAddTodo={addTodoHandler} />
      <FlatList
        data={newTODO}
        renderItem={todo => (
          <ToDoItem
            id={todo.item.key}
            content={todo.item.value}
            onDelete={removeTodoHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
