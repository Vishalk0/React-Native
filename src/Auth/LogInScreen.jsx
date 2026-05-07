import { StyleSheet, Text, View } from 'react-native'
import LogInScreen from './LogInScreen'
import { Button } from 'react-native/types_generated/index'
const LogInScreen = () => {

  let name = "Vishal"
  const getData = () => {
    name = "Vishu"
    console.warn('Name:',name)

  }
  return (
    <View>
      <Button tittle="Press" onPress={()=>getData('vishal')} />
    </View>
  )
}

export default LogInScreen

const styles = StyleSheet.create({})