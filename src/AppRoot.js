import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AddTodo from './AddTodo'
import Item from './Item'

export default class AppRoot extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      inputText: '',
    }
  }

  addTodoHandler = () => {
    const { inputText: text } = this.state
    if (!text) return
    const todos = [...this.state.todos, { key: Date.now(), text }]
    console.log({ todos })
    this.setState({ todos, inputText: '' }, () => {
      console.log(this.state)
    })
  }

  inputTextHandler = inputText => {
    this.setState({ inputText })
  }

  render() {
    const { inputText, todos } = this.state
    return (
      <View style={styles.container}>
        <AddTodo
          btnHandler={this.addTodoHandler}
          inputHandler={this.inputTextHandler}
          inputText={inputText}
        />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Item style={styles.container.item} text={item.text} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
