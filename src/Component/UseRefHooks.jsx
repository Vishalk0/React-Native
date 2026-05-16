import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
//useref hook ka used kisi component ko direct target karana hota hai
//  eske used se component re render nahi hota hai
const UseRefHooks = () => {
    const myref=useRef();
    const handleref=()=>{
        myref.current.setNativeProps({
          text:"Vishal"  
        })
    }
    return (
        <View>
            <Text>UseRefHooks</Text>
            <TextInput style={styles.input}
                ref={myref}
                placeholder='Enter your name'
                placeholderTextColor={"#999"}
            />
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UseRefHooks

const styles = StyleSheet.create({})