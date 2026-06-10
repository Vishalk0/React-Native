import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Axios } from 'axios'
//this is used to update value some value not whole value it is just like work as put api method

const Patch_Api = () => {
    const [formData, setFormData] = useState(
        {
            id: '', name: ''
        }
    )
    const handleRequest = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }
    const handleRequest = async () => {
        try{
        const response=await Axios.patch('url')
        Alert.alert('Update Successfully')
        console.log(response.data)
        }catch(error){

        }
    }
    return (
        <View>
            <Text>Patch_Api</Text>
        </View>
    )
}

export default Patch_Api

const styles = StyleSheet.create({})