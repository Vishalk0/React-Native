import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Stylebtn = () => {
  return (
    <View>
      <Text>Styling Button with proper.</Text>
      <TouchableOpacity >
        <Text>Click Here</Text>
      </TouchableOpacity>
      <Pressable onPress={}>
     <Text>Press Here</Text>
      </Pressable>
    </View>
  )
}

export default Stylebtn

const styles = StyleSheet.create({
    btn:{
        margin:20,
        backgroundColor:"pink"
    }
})