import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text} from 'react-native'

const MeuInput = (props) => {

    return (
        <SafeAreaView>
            <Text style= {{marginLeft: 10, fontWeight: '400', fontSize: 15}}>{props.label}</Text>
            <TextInput
            style={style.input}
            placeholder={props.placeHolder}
            secureTextEntry={props.comMascara}
            onChangeText={valor => props.setValor(valor)}
            ></TextInput>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 15,
        marginTop:0,
        padding:10,
        width:360,
        height: 69,
        fontSize:20,
        color:"black",
        borderRadius:15,
        backgroundColor: '#ffffff'
    }
});

export default MeuInput;