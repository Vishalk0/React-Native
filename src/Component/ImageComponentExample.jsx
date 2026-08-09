import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'


const ImageComponentExample = () => 
    {
        //require are used for access local image 
        const localImage=require('here we pass the local folder')    
        const remoteImage={uri:''}
        return (
   <ImageBackground
   source={localImage}
   style={styles.Image}
   resizeMode={}
   >
    <View>
        <Text>React native</Text>
        <Image
        source={localImage}
        style={styles.Image}
        resizeMode='cover'
        />
    </View>

   </ImageBackground>
  )
}

export default ImageComponentExample

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    Image:{
        padding:20
    }
})