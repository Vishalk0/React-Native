import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactItem = ({name,email}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  )
}

export default ContactItem

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flexDirection:"row",
        

    }
})