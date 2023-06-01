import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text} from 'react-native'

const MeuInput = (props) => {

    return (
        <SafeAreaView>
            <Text>{props.label}</Text>
            <TextInput
            style={style.input}
             placeholder={props.placeHolder}
             secureTextEntry={props.comMascara}
            ></TextInput>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 5,
        marginBottom: 20,
        marginTop:1,
        padding:20,
        width:350,
        fontSize:23,
        color:"black",
        borderRadius:15
    }
});

export default MeuInput;