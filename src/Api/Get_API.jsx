import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_API = () => {
    const [mydata, setmydata] = useState([]

    )
    // //this is old pattern to call api we are used modern techniques to used axois
    // useEffect(()=>{
    //     fetch('http://localhost:3000/user').then((response)=>{
    //          response.json().then((result)=>{
    //             console.log(result)
    //          })
    //     })

    // },[])
    axios.get('http://localhost:3000/user').then((result) => {
        console.log(result.data)
        setmydata(result.data)
    })
    return (
        <View>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Get_API</Text>
            {
                mydata.map((item) => (
                    <Text key={item.id} style={{ fontSize: 20, marginBottom: 10 }}>{item.name}</Text>
                ))
            }
        </View>
    )
}

export default Get_API

const styles = StyleSheet.create({})