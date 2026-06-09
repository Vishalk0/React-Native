import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'



const Post_API = () => {
    const[data,setData]=useState({id:'',name:'',age:''})
    const handleApi=(field,value)=>{
        setData({...data,[field]:value})
    }

  return (
    <View>
      <Text style={{fontSize:24,}}>Post_API</Text>
      <TextInput
      placeholder='Enter Your ID'
      />
      <TextInput
      placeholder='Enter Your Name'/>
      <TextInput
      placeholder='Enter Your Age'
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