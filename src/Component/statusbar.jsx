import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'

const statusbar = () => {
  return (
    <View>
      <Text>statusbar</Text>
    <StatusBar 
    barStyle={'light-content'}
    hidden={false}
    translucent={true}
    
    />
    </View>
  )
}

export default statusbar

const styles = StyleSheet.create({})