import React from "react";
import {Text, StyleSheet, View, Alert} from "react-native" 
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container , MeuText } from "../../styles/style-geral";

// Todo componente no react native é um função ou uma classe
function Login (){

    const logar = () =>{
        Alert.alert("Aqui vou logar no sistema");
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
<<<<<<< Updated upstream
                label="E-mail"
                placeHolder="exemplo@exemplo.com"
                comMascara={false}
=======
                label="E-mail ou Nome de Usuário"
                placeHolder="Digite Aqui..."
>>>>>>> Stashed changes
            ></MeuInput>

            <MeuInput 
                label="Senha"
<<<<<<< Updated upstream
                placeHolder="123456"
                comMascara={true}
=======
                placeHolder="********"
>>>>>>> Stashed changes
            ></MeuInput>

            <View style={style.boxRecuperarSenha}>
                <Text style={style.recuperarSenha}>Recuperar senha</Text>
            </View>

            <SuperButton
            value={"Entrar"}
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
<<<<<<< Updated upstream
        // color: '#FF5722',
        // fontSize:60,
        fontWeight: '700',
        textAlign: "center",
        marginBottom: 15
    },
    // Será reponsavel por alinhar o texto.
    boxRecuperarSenha:{
        width:300,
        justifyContent: "flex-end",
        textAlign: "right",
    },
    // Pela estilização da cor e do tamanho
    recuperarSenha:{
        color: '#FF5722',
=======
        color: 'black',
        fontSize:100,
        fontWeight: '500',
        textAlign: "center",
        marginBottom: 30
>>>>>>> Stashed changes
    }
});

export default Login;