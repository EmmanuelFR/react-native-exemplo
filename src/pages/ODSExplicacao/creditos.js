import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Container } from "../../styles/style-geral";

function linkSaibaMais() {
    Linking.openURL('https://www.ipea.gov.br/ods/index.html')
}

function Creditos (){
    
    const avancarCreditos = () => {}

    return (
        <Container style={styleCreditos.fundoCreditos}>
        
        <Text style={styleCreditos.textoCreditos}> Aluno: Emmanuel de Freitas Ribeiro </Text>
        <Text style={styleCreditos.textoCreditos}> Professor: Weberson Rodrigues </Text>
        <Text style={styleCreditos.textoCreditos}> UNIFAA - Engenharia de Software </Text>
        <Text style={styleCreditos.textoCreditos}> 2023 - 2026</Text>

        <Image 
        source={require ('../../../assets/ODS-Creditos.jpeg')}
        style={styleCreditos.imagemCreditos}></Image>
        
        <Image
        source={require ('../../../assets/ODS-Way-verde.jpeg')}
        style={styleCreditos.imagemCreditos}></Image>

        <BotaoSaibaMais
        value={"Saiba mais sobre os ODS"}
        acao={linkSaibaMais}>
        </BotaoSaibaMais>    

        </Container>
    )
}

const BotaoSaibaMais = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleCreditos.botaoSaibaMais}
            onPress={props.acao}>

            <Text style={styleCreditos.textoSaibaMais}>
            {props.value}
            </Text>

            </TouchableOpacity>
        </View>
    )
}

const styleCreditos = StyleSheet.create({
    fundoCreditos: {
        backgroundColor: '#3AE1AF'
    },
    textoCreditos: {
        fontWeight: '100',
        fontSize: 20,
        margin: 1,
        textAlign: 'center',
    },
    imagemCreditos: {
        width: 225,
        height: 225,
        margin: 20,
        borderRadius: 15
    },
    botaoSaibaMais: {
        flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: '#A0DBAD', 
            borderWidth: 1, 
            borderColor: '#000000',
            width: 200, 
            height: 50, 
            borderRadius: 15, 
            margin: 20,
            paddingLeft: 2,
            paddingRight: 2,
    },
    textoSaibaMais: {
        fontWeight: "bold",
        fontSize: 15,
        padding: 10,
        alignSelf: 'center',
        width: 'auto'
    },
});

export default Creditos;