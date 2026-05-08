import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const datashow = (props) => {
  //here I am get the value through the props
  console.log(props.data)
  const item=props.item
    return (
    <View>
      <Text>This is Data Show Screen</Text>
      <Text>{props.data}</Text>
      <Text>{item}</Text>
    </View>
  )
}

export default datashow

const styles = StyleSheet.create({})