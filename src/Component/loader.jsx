import { ActivityIndicator, StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
//step 1 -> we are used activity indicator for show the loading phase.

const loader = () => {
    const [load, setload] = useState(false)
    const toggleLoder=()=>{
setload(!load)
    }
    return (
        <View>
            
            <Pressable>
                <Text>{load ? 'Hide Loading' : 'show loading'}</Text>
            </Pressable>
            {
                load && (
                    <View>
                    <ActivityIndicator/>
                    <Text>Loading....</Text>
                    </View>
                )
            }
        </View>
    )
}

export default loader

const styles = StyleSheet.create({})