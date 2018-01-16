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

  componentWillMount() {
    fetch('http://10.0.0.180:3000/todos')
      .then(res => res.json())
      .then(data => {
        console.log({ data })
        const todos = data.map(todo => Object.assign(todo, { key: todo.id }))
        this.setState({ todos }, () => console.log(this.state))
      })
      .catch(console.log)
  }

  addTodoHandler = () => {
    const { inputText: text, todos: oldTodos } = this.state
    if (!text) return
    fetch('http://10.0.0.180:3000/todos', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        const todos = [...oldTodos, Object.assign(data, { key: data.id })]
        this.setState({ todos, inputText: '' })
      })
      .catch(console.log)
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
            <Item style={styles.container.item} text={item.name} />
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
    fontSize: 18,
  },
})
