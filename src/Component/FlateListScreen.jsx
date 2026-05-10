import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const FlateListScreen = () => {
  const dummy = [
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
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.item}>{item.tittle}</Text>
    </View>
  );
  return (
    <View>
      <Text>FlateList</Text>
      <FlatList
        data={dummy}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default FlateListScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'green',
    padding:10
  },
  list:{
 
  },
  item:{

  },
  tittle:{
     
  }
})