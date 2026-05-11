import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'


const data=[
    { id: 1, tittle: "Vishal" },
    { id: 2, tittle: "Vishu" },
    { id: 3, tittle: "Vishal" },
    { id: 4, tittle: "Vishal" },
    { id: 5, tittle: "Vishal" },
    { id: 6, tittle: "Vishal" },
    { id: 7, tittle: "Vishal" },
    { id: 8, tittle: "Vishal" },
    { id: 9, tittle: "Vishal" },
    { id: 10, tittle: "Vishal" },

]
const Grid = () => {
  return (
    <View>
      <Text>Show Grid</Text>
      <ScrollView >
        {
            data.map((item)=>(
                <View key={item.id}>
                    <Text>{item.tittle}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default Grid

const styles = StyleSheet.create({})