import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,TouchableOpacity,TextInput,
Platform, StatusBar,SafeAreaView } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize"

export default class Task extends React.Component{
    constructor(props){
    super(props);
 
  }
  render(){
       return(
      <View style = {styles.item}>
        <Text style = {styles.taskDisplay}>
          {this.props.displayItem}
        </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
    width: 250,
    height: 30,
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "lightblue",
    borderWidth: 2,
   
  },
  taskDisplay:{
    paddingLeft: 10,
    
  }
})