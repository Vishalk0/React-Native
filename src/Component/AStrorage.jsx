import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native'
import React, { useState } from 'react'


//this is used to save some small and not highily secure data..
const AStrorage = () => {
    const[name,setname]=useState('')
    //asyn ka used karane se code block nahi hota hai 

    const saveData=async()=>{
        await AsycnStorage.setname('name',name)
        setname('')
        Alert.alert('name is saved')
    }
    const getData=async()=>{
        await AsycnStorage.getData('name')
        setname('')
        Alert.alert('found user data')
    }
  return (
    <View>
        <TextInput 
        placeholder='Enter your name'
        value={name}
        onChangeText={setname}
        />
        <Button title='Save Data'/>
        <Button title='Get Data' />
      <Text>AStrorage</Text>
    </View>
  )
}

export default AStrorage

const styles = StyleSheet.create({})