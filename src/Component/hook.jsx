import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native/types_generated/index';

const hook = () => {
    //Here I am define Use State.
    const [state, setState] = useState();
    const [name, setName] = useState("VK");
    const updateValue = () => {
        setState("Vishal")
    }
    return (
        <View>
            <Text style={{ fontSize=30 }}>Name:{name}</Text>
            <Button tittle="Press" onPress={updateValue} />
        </View>
    )
}

export default hook

const styles = StyleSheet.create({})