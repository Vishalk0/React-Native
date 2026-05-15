import { StyleSheet, Text, View, Pressable, } from 'react-native'
import React from 'react'
//this code is used to represented onpress onlongpress onpressout functionlity
//onpress and onlongpress ek shath work nahi karate ek karati hai to dusari nahi nahi kati
//by default onlongpress ka time 500mili sec hota hai jo change ho skata hai.

const PressableBtn = () => {
    const handler = () => {
        console.log("OnPress")
    };
    const handlerlong = () => {
        console.log("long press")
    }
    return (
        <View>
            <Text>PressableBtn</Text>
            <Pressable onPress={handler} onLongPress={handlerlong} delayLongPress={5000}>
                <Text>Next Button</Text>
            </Pressable>
        </View>
    )
}

export default PressableBtn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        backgroundColor: '#ccc'

    },
    btntext: {
        height: "50%"
    },
})