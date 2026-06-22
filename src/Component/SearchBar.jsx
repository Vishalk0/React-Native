import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'


const SearchBar = () => {
    const [searchQuery, setsearchQuery] = useState('')

    const contacts = [
        { id: '1', name: 'Vishal', age: '23' },
        { id: '2', name: 'Vipin', age: '25' },
        { id: '3', name: 'Vikas', age: '28' },
        { id: '4', name: 'Vishali', age: '29' },
        { id: '5', name: 'Vishunu', age: '20' },
        { id: '6', name: 'Vivek', age: '21' },
    
    ]
    //this code is help to filter the data form database and show in flatlist 
    const filtercontacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const renderItem = ({item})=>(
        <View>
            <Text>{item.name}</Text>
        </View>
    )

    return (
        <View>
            <Text>SearchBar</Text>
            <TextInput
                placeholder='Search contact'
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={setsearchQuery}
            />
            <FlatList
                data={ filtercontacts}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
                contentContainerStyle={}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'Green',
        padding:20
    },
    title:{
        fontSize:24,
        fontFamily:'',
        color:'black',
        textAlign:'center'
    },
    Searchbar:{
        height:40,
        borderColor:'#09caf9',
        borderWidth:1,
        borderRadius:12,
        paddingHorizontal:14 
        
    }
})