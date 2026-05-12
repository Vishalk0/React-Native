import React from "react";
import { Component } from "react";
import {Text,Button,State} from 'react-native'

class ClassComponent extends Component {
    //always define state in constructor method
    constructor(){
        super()
        this.state={
            myname:'Vishal'
        }
    }
    updateName=()=>{
        this.setState({myname:'Kushwahaf'})
    }
    render() {
         return(
            <View>
                <Text style={{fontSize:30}}>Name:{this.state.myname}</Text>
                <Button />
            </View>  
         )
    }
}