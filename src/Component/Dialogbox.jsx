import { StyleSheet, Text, TouchableOpacity, View ,Alert, Modal} from 'react-native'
import React from 'react'
import { useState } from 'react'
//we are used modal for show diolog box message...
const Dialogbox = () => {
    const showMessage=()=>{
        Alert.alert(
            "Success",
            "I am Vishal"
        )
    }
    const[modalvisble,setmodalvisibal]=useState(false);
  return (
    <View>
      <Text>Dialogbox</Text>
      <TouchableOpacity onPress={()=>setmodalvisibal(true)}>
        <Text>Click Here</Text>
      </TouchableOpacity>
      <Modal visible={modalvisble} animationType='slide' transparent={true} >
        <View>
            <Text>Hello Everyone</Text>
            <TouchableOpacity onPress={()=>setmodalvisibal(false)}>
                <Text>Close dialog Box</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default Dialogbox

const styles = StyleSheet.create({})