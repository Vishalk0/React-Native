import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios, { Axios } from 'axios'

const GET_Fetch_flatList = () => {
    const [myData, setData] = useEffect([])
    useEffect(() => {
        axios.get('http://10.0.0.2:3000/user').then((resopose) => {
            setData(resopose.data)
        })
    }, [])
    const renderItem = ({ item }) => {
        <View>
            <Text>List of Api Fetch Data</Text>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
        </View>
    }
    return (
        <View>
            <Text>GET_Fetch_flatList</Text>
            <FlatList
                data={myData}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id.toString()}
            />

        </View>
    )
}

export default GET_Fetch_flatList

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fccc',
        padding:20
    },
    header:{
        fontSize:24,
        
    }
})