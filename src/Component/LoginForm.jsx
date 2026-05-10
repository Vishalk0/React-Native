import { StyleSheet, Text, View, TextInput, Pressable,Button } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("")

    const loginHandling =()=>{
        console.log('Email:',email)
        console.log('Password:',pass)
        setEmail('')
        setpass('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>loginForm</Text>
            <TextInput
            style={styles.textinput}
                placeholder='Email'
                value='email'
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none" />
            <TextInput
            style={styles.textinput}
                placeholder='Password'
                value='pass'
                onChangeText={setpass}
                secureTextEntry

            />
            <Pressable onPress={loginHandling}>
                <Button style={styles.btn} title='Save Data'/>
                    
                
            </Pressable>

        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textinput: {
        height:50,
        borderColor:"#ccc",
        borderWidth:2,
        marginBottom:20,
        paddingHorizontal:15,
        borderRadius:10,
        backgroundColor:"#fff",
        fontSize:16,
        color:'#333'
    


    },
    heading:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginBottom:30
    },
    btn:{
        height:50,
        textAlign:"center",
        padding:6
    }
})