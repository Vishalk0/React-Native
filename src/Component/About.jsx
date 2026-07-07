import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = (props) => {
    const{username}=props.route.params
  return (
    <View>
      <Text>Welcome {username}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})