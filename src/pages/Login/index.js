import React from "react";
import {Text, StyleSheet, View, Alert} from "react-native" 
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container , MeuText } from "../../styles/style-geral";

// Todo componente no react native é um função ou uma classe
function Login ({navigation}){

    const logar = () =>{
        // 1° Obter email e senha e verificar se foram informados
            // 1.1 se não tiver, mandar mensagem ao usuario
        // 2° Verificar se esses dados existe na api, no backend.

        // é aqui que vou tentar autenticar o usuario e fazer ele ir para as proximas telas.

        let email = "pedrinho123@gmail.com";
        let senha = "melhorsenhadetodas"
        let pais = "Brasil"
        let alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"

        // Navegando para a pagina de Home passando parametros
        navigation.navigate('Home',{email, senha, pais, alfabeto});

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
        backgroundColor: 'cyan'
    },
    titulo: {
        color: 'darkblue',
        fontSize:90,
        fontWeight: '800',
        textAlign: "center",
        marginBottom: 20
    },
    // Será reponsavel por alinhar o texto.
    boxRecuperarSenha:{
        width:260,
        justifyContent: "flex-end",
        textAlign: "right",
        fontSize:80
    },
    // Pela estilização da cor e do tamanho
    recuperarSenha:{
        color: 'blue',
    }
});

export default Login;