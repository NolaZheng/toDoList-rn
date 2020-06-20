import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [text, changeText] = useState('OMG React!')

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={() => changeText('I love Mommy!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
