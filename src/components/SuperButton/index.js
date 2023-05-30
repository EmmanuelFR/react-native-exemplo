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
        backgroundColor: 'purple',
        padding:12,
        width:320,
        borderRadius:15,
        marginTop:5,
        borderWidth: 2,
    },
    texto:{
        fontSize:23,
        color:"pink",
        fontWeight: 900
    }

})

export default SuperButton;