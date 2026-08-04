import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


 const Stack=createStackNavigator();

const TabNavi = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Setting' component={SettingScreen}/>
    <Stack.Screen name='Profile' component={ProfileScreen}
     options={
    {
        title:'Profile'
    }
    }/>
   </Stack.Navigator>
  )
}

export default TabNavi

const styles = StyleSheet.create({})