import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { user } from '../DataModal/ContactData';
import ContactItem from '../Component/ContactItem';



const ContactScreen = () => {
  const renderItem = ({ item }) => 
  <ContactItem name={item.name} email={item.email} />
  return (
    <View>
      <FlatList
        data={user}
        renderItem={renderItem }
        keyExtractor={(item)=>item.id}

      />
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})