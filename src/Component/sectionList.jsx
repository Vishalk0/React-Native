import { StyleSheet, Text, View, ViewBase,SectionList  } from 'react-native'
import React from 'react'


const dummy = [
    {
        title: "Fruits",
        data: [{
            id: 1, name: "Mango"
        },
        { id: 2, name: "Orange" },
        { id: 3, name: "Banana" }
        ]
    },
    {
        title: "Vegitables",
        data: [{
            id: 4, name: "Patota",
            id: 5, name: "Tomato",
            id: 6, name: "Began"
        }]
    }

]

const sectionList = () => {
    //funtion for renderItem
    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
    //function for renderSectionHeader
    const renderSectionHeader = ({ section }) => (
        <View>
            <text>{section.title}</text>
        </View>
    );
    return (
        <View>
            <Text>sectionList</Text>
            <SectionList
                sections={dummy}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default sectionList

const styles = StyleSheet.create({})