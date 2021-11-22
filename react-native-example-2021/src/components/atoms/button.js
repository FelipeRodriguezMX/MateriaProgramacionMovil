import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Btn = (props) =>{
    return (
        <View style={styles().container}>
            <TouchableOpacity style={styles(props.color).button}  accessibilityLabel={props.accessibilityLabelBtn} onPress={props.exeFunction} >
                <Text style={styles().text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = (btnColor) => StyleSheet.create({
    container:{
        width:'80%',
        paddingHorizontal:20,
        height: 50,
    },
    button:{
        borderRadius: 10,
        height:40,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: btnColor
    },
    text:{
        fontSize: 20,
        color: 'white',
    },
});
export default Btn;