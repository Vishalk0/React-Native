import { StyleSheet, Text, View, Alert, Pressable } from 'react-native'
import React from 'react'

const AlertMessage = () => {
    const showMessage = () => {
        Alert.alert(
            "Hello Brother",
            "I am Vishal Kushwaha",
            [
                {
                    text: 'cancel',
                    onPress: () => console.log("Cancel")
                },

                {
                    text: 'ok',
                    onPress: () => console.log("Ok")

                }
            ],
            { cancelable: false }
        )
    }
    return (
        <View>
            <Text>AlertMessage</Text>
            <Pressable onPress={showMessage}>
                <Text>Show Alert Message</Text>
            </Pressable>
        </View>
    )
}

export default AlertMessage

const styles = StyleSheet.create({})