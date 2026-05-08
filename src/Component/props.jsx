import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'
import dataShow from './datashow'

const props = () => {
  const[count,setCount]=useState(0)
  const[item,setItem]=useState(2);
  return (
    <View>
      <Text styles={style.btn}>Vishal Kushwaha</Text>
      <Button tittle="Press" onPress={()=>{setCount(count+1)}}/>
        <Button tittle="Item" onPress={()=>{setItem(item*5)}} />
          
          
      <dataShow data={count} item={item}/>
    </View>
  )
}

export default props

const styles = StyleSheet.create({
    btn:{
        fontSize=20,
        fontFamily="Bold"
    }
})