import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

const SuperButton = (props) => {

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}
            onPress={props.acao}>
                <Text style={style.texto}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: 'blue',
        padding:15,
        width:350,
        borderRadius:15,
        marginTop:10,
        borderWidth:3
    },
    texto:{
        fontSize:25,
        color:"aquamarine",
        fontWeight: 900
    }

})

export default SuperButton;