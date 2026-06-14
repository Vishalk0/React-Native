import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlateformExample = () => {
    return (
        <View>

            <Text>PlateformExample</Text>
            <Text>This is android</Text>
            <Text>You are useing android</Text>
            <Text>{Platform.OS === 'ios' ? 'Welcome to IOS Devices' : 'Welcome to android Devices'}</Text>
        </View>
    )
}

export default PlateformExample

const styles = StyleSheet.create({
    container:{
        fontSize:24,
        color:Platform.OS ==='ios'?'blue':'green',
        marginBottom:20
    }
})