import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, StyleSheet, useColorScheme, FlatList, Button, TextInput } from 'react-native';


const dummy = [
  { id: 1, name: "Vishal", email: "vishu@gmail.com", image: "https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE" },
  { id: 2, name: "Almeen", email: "almmen", image: "https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0" },
  { id: 3, name: "Vrijesh", email: "vis@gmail", image: "https://unsplash.com/photos/a-stack-of-pancakes-with-blueberries-and-syrup-g4jSyttFc08" },
  { id: 4, name: "Almeen", email: "almmen", image: "https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0" },
  { id: 5, name: "Almeen", email: "almmen", image: "https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0" },
  { id: 6, name: "Almeen", email: "almmen", image: "https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0" },
  { id: 7, name: "Almeen", email: "almmen", image: "https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0" },
  { id: 8, name: "Almeen", email: "almmen", image: "https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0" },


]

const App = () => {
  return (

    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <View style={styles.Card}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 5 }}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text>{item.id}</Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};
const New = () => {
  const [text, setText] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello Ji SWagat hai apaka</Text>
      <TextInput
        placeholder='Enter Your Name'
        value={text}
        style={styles.input}
        onChangeText={(text) => setText(text)}
      />
      <Button title='Submit' style={styles.button}></Button>
      <Text>Result:{text} </Text>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    flex:1,
    backgroundColor: "#dadada",
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    gap: 10,
    alignItems:"center"
  },
  Card: {
    height: "100",
    width: "100",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5.5,
    alignItems: "center"
  },
  input: {
    width: "90%",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"

  },
  textStyle:{
    fontSize:20,
    fontWeight:'bold'
  },
  button:{
    width:100,
    height:100,
    borderRadius:10,
    alignContent:"center",
    justifyContent:"center"
  }

})
