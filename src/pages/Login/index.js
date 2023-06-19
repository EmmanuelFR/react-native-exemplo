import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Alert } from "react-native" 
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";
import { Container , MeuText } from "../../styles/style-geral";

const infoEntrada = {
    usuario: "ODSWay",
    senha: "2030"
}

function Login ({navigation}){

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    const logar = () =>{
        let texto = "Neste APP, você terá acesso a informações básicas sobre os Objetivos de Desenvolvimento Sustentável (ODS), e conhecer as metas da ONU a serem alcançadas mundialmente, até o ano de 2030."
        
        if(!usuario || !senha){
            Alert.alert('Para prosseguir, digite usuário e senha.');
        }else if(usuario !== infoEntrada.usuario || senha !== infoEntrada.senha){
            Alert.alert('Usuário ou senha incorretos, tente novamente.');
        }else{
            navigation.navigate('Home',{texto});
        }
 }

    return (
        <Container style={style.boxLogin}>
            
            <Image 
            source= {require ('../../../assets/ODS-Way.png')}
            style= {{width: 300, height: 300, borderRadius: 150}}>
            </Image>

            <MeuText fontSize= {60} style={style.titulo}>Login</MeuText>

            <MeuInput 
                label="E-mail ou Nome de Usuário:"
                placeHolder="Digite aqui"
                comMascara={false}
                setValor= {setUsuario}
            ></MeuInput>

            <MeuInput 
                label="Senha:"
                placeHolder="********"
                comMascara={true}
                setValor= {setSenha}
            ></MeuInput>

            <View style={style.boxRecuperarSenha}>
                <Text style={style.recuperarSenha}>Esqueceu sua Senha? Recupere-a agora!</Text>
            </View>

            <SuperButton
            value={"Continuar"}
            acao={logar}
            ></SuperButton>
        </Container>
    );
}

const style = StyleSheet.create({
    boxLogin:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AE1AF'
    },
    titulo: {
        color: '#ffffff',
        fontSize:50,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 50
    },
    boxRecuperarSenha:{
        width:260,
        justifyContent: "flex-end",
        textAlign: "right",
        fontSize:50
    },
    recuperarSenha:{
        color: '#000000',
    }
});

export default Login;