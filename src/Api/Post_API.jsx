import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Axios } from 'axios'



const Post_API = () => {
    const[data,setData]=useState({id:'',name:'',age:''})
    //this line is create to handle the field and value  
    const handleApi=(field,value)=>{
        setData({...data,[field]:value})
    }
    //when we are used api then we follow try catch method 
    const handleSubmit= async()=>{
      try {
        const response= await Axios.post('url')
        Alert.alert('Success!', 'Data submit successfully')
        setData()
      } catch (error) {
        Alert.alert('ERROR','Message are not Submitted...')
      }
    }

  return (
    <View>
      <Text style={{fontSize:24,}}>Post_API</Text>
      <TextInput
      placeholder='Enter Your ID'
      value={data.id}
      onChangeText={(value)=>handleApi('id',value)}
      />
      <TextInput
      value={data.name}
      placeholder='Enter Your Name'/>
      onChangeText={(value)=>handleApi('name',value)}
      <TextInput
      value={data.age}
      placeholder='Enter Your Age'
      onChangeText={(value)=> handleApi('age',value)}
      />
      <TextInput
      placeholder='Enter Your Profession'
      />
      <Button title='Submit'/>
    </View>
  )
}

export default Post_API

const styles = StyleSheet.create({})