import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native/types_generated/index'

const About = (props) => {
    const{username}=props.route.params
  return (
    <View>
      <Text>Welcome {username}</Text>
      <Button title="Go Back" onPress={()=>props.navigation.goBack()}  />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})