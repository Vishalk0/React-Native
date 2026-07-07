import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import React from 'react'


const loginpractics = ({navigation}) => {
  return (
    <View>
      <TextInput
      placeholder='Enter Your Name'
      />
      <Button title='Log In' onPress={()=> navigation.navigate('About',{userName:'Vishal'})}/>
    </View>
  )
}

export default loginpractics

const styles = StyleSheet.create({})