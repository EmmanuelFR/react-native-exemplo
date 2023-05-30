import React from "react";
import {Text, StyleSheet, View, Alert} from "react-native" 
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container , MeuText } from "../../styles/style-geral";

// Todo componente no react native é um função ou uma classe
function Login (){

    const logar = () =>{
        Alert.alert("Login concluído com sucesso. Seja bem-vindo(a) de volta!");
    }
    // const salvar = () =>{
    //     Alert.alert("Aqui vou Salvar no sistema");
    // }

    // const adicionar = () =>{
    //     Alert.alert("Aqui vou Adicionar no sistema");
    // }

    return (
        <Container style={style.boxLogin}>
            <MeuText fontSize= {60} style={style.titulo}>Login</MeuText>

            <MeuInput 
                label="E-mail ou Nome de Usuário:"
                placeHolder="Digite aqui"
                comMascara={false}
            ></MeuInput>

            <MeuInput 
                label="Senha:"
                placeHolder="********"
                comMascara={true}
            ></MeuInput>

            <View style={style.boxRecuperarSenha}>
                <Text style={style.recuperarSenha}>Esqueceu sua Senha? Recupere-a agora!</Text>
            </View>

            <SuperButton
            value={"Continuar"}
            acao={logar}
            ></SuperButton>

           {/* <SuperButton
            value={"Salvar"}
            acao={salvar}
            >
            </SuperButton>

            <SuperButton
            value={"Adicionar"}
            acao={adicionar}
            >
            </SuperButton> */}


        </Container>
    );
}

const style = StyleSheet.create({
    boxLogin:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    titulo: {
        color: 'purple',
        fontSize: 80,
        fontWeight: '800',
        textAlign: "center",
        marginBottom: 30
    },
    // Será reponsavel por alinhar o texto.
    boxRecuperarSenha:{
        width: 300,
        justifyContent: "flex-end",
        textAlign: "right",
    },
    // Pela estilização da cor e do tamanho
    recuperarSenha:{
        color: 'darkblue',
        fontWeight: '900',
        fontSize: 16,
    }
});

export default Login;