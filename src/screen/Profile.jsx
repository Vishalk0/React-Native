import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Button } from 'react-native/types_generated/index'

const Profile =({navigation}) => {
  
  return (
    <View> 
      <Text>Profile</Text>
      <Button title='Next Screen' onPress={()=>navigation.navigate("Search")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})