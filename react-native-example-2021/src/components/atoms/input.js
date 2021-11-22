import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const TextField = (props) =>{
    const isValid = (_isValid) =>{
        if (_isValid == true) {
            return <Text style={styles.alert}>El campo esta vacio</Text>;
        }
    }
    return(
        <View>
            <TextInput 
                style={[styles.input, props.isvalid==true ? styles.invalid: styles.valid]}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}  
                onChangeText ={props.textOnChange}  
            />
            {isValid(props.isvalid)}
        </View>
    );
}
const styles = StyleSheet.create({
    input:{
        height: 50,
        width:300,
        marginHorizontal: 12,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    invalid:{
        borderColor: 'red'
    },
    valid:{
       borderColor: 'black' 
    },
    alert:{
        color: 'red'
    }
});

export default TextField;
