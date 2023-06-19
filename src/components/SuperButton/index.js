import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

const SuperButton = (props) => {

    return (
        <View style={style.container}>
            <TouchableOpacity
            style={style.button}
            onPress={props.acao}>
                <Text style={style.texto}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#A0DBAD',
        padding:15,
        width:160,
        height:69,
        borderRadius:15,
        marginTop:10,
        borderWidth:1
    },
    texto:{
        fontSize:25,
        color:"#000000",
        fontWeight: "bold",
    }

})

export default SuperButton;