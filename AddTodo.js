import React from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'

export default ({ btnHandler, inputHandler, inputText }) => (
  <View>
    <TextInput
      style={{ height: 100, width: 50 }}
      onChangeText={inputHandler}
      value={inputText}
    />
    <TouchableHighlight onPress={btnHandler} title="Add Todo">
      <Text>Add Todo</Text>
    </TouchableHighlight>
  </View>
)
