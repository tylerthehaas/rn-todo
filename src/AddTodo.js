import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

export default ({ btnHandler, inputHandler, inputText }) => (
  <View>
    <TextInput
      onChangeText={inputHandler}
      placeholder="What do you want TODO?"
      style={styles.input}
      value={inputText}
    />
    <TouchableHighlight
      style={styles.button}
      onPress={btnHandler}
      title="Add Todo"
    >
      <Text style={styles.buttonText}>Add Todo</Text>
    </TouchableHighlight>
  </View>
)

const height = 100

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'lightblue',
    height,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: height - 10,
  },
  input: {
    height: 50,
    margin: 50,
  },
})
