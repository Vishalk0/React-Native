import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

//context used hota hai ki ham props ko globle used kar sake
//Create,provider,use

 export const CounterContext=createContext()
const parent = () => {
    const[count,setCount]=useState('')
  return (
    <CounterContext.Provider value={{count}}>
        <View>
            <About/>
        </View>
    </CounterContext.Provider>
  )
}

export default parent

const styles = StyleSheet.create({})