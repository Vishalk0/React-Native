import { Pressable, StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect, useState } from 'react'



const UseEffectHook = () => {
    const[count,setCount]=useState(0);
    //we are used this function for mounting life cycle and it is always call automatic
    useEffect (()=> {
console.log("this is used effect hook.");
    },[]);
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,textAlign:'center'}}>UseEffectHook</Text>
      <Text>Count:{count}</Text>
   
   
   <Button title='Press' onPress={()=>setCount(count+1)} style={styles.btn}/>
    </View>
  )
}

export default UseEffectHook

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:10,
        paddingHorizontal:30,
        gap:10
        
    },
    btn:{
        height:50,
        borderRadius:12,
        borderWidth:1,
        borderColor:"blue"

        
    }
})