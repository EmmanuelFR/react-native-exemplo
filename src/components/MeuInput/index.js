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
        borderWidth: 4,
        marginBottom: 25,
        marginTop:3,
        padding:15,
        width:350,
        fontSize:25,
        color:"black",
        fontWeight:"100",
        borderRadius:15
    }
});

export default MeuInput;