import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'



const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button title='Next Page' onPress={() => navigation.navigate("Profile")} style={styles.btn} />

    </View>
  )
};

export default Home

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    justifyContent: "center",
    
    gap: 10
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  btn: {
    width: 100,
    height: 60,
    backgroundColor: 'blue'
  }
})
