import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const navigationPractice = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Contact" component={Contact}/>
      </stack.Navigator>

    </NavigationContainer>
    
  )
}
//we are create instance for navigation purpuse 
const stack=createNativeStackNavigator()

export default navigationPractice

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

})