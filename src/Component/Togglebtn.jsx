import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import ToggleShowScreen from './ToggleShowScreen'

//this is used to show example of dark mode method...
const Togglebtn = () => {
    const [status, setStatus] = useState(true);
    return (
        <View>
            <Text>Togglebtn</Text>
            {
                status ? <ToggleShowScreen /> : null
            }
            
            <Button title="Hide" onPress={() => setStatus(false)} />
            <Button title="Show" onPress={() => setStatus(true)} />
            <Button title="Toggel" onPress={() => setStatus(!status)} />
        </View>
    )
}

export default Togglebtn

const styles = StyleSheet.create({})