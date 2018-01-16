import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Reddit extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }
  componentWillMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json',
    })
      .then(res => res.json())
      .then(data => this.setState({ posts: data.data.children }))
      .catch(console.error)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Reddit</Text>
        <View>{this.state.posts.map(p => <Text>{p.data.author}</Text>)}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
})
