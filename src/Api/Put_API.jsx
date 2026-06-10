import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Put_API = () => {

    const handleApi=(field,value)=>{

    }
    return (
    <View>
      <Text style={{textAlign:'center',fontSize :24, marginBottom:10}}>Put_API</Text>
    <TextInput
    placeholder='Enter your name'
    value={FormData.id}
    onChangeText={()=>handleApi(value)}
    />
    </View>
  )
}

export default Put_API

const styles = StyleSheet.create({})