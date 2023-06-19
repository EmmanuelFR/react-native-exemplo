import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { Container } from "../../styles/style-geral";
import SuperButton from "../../components/SuperButton";

function Home({navigation, route}){
    
    const avancar = () =>{

        navigation.navigate('Menu');
    }

    return (
            <Container style={styleHome.fundoHome}>
            
            <Text style={{textAlign:'center', margin: 10, fontSize: 20, fontWeight: '100', marginBottom: 60}}>{route.params.texto}</Text>
            
            <Image
            source= {require ('../../../assets/ODS-explicacao.jpg')}
            style={{width: 294, height: 311, borderRadius: 15, marginBottom: 60}}>
            </Image>
            
            <SuperButton
            value={"Avançar"}
            acao={avancar}>
            </SuperButton>

            </Container>
    )
}

const styleHome = StyleSheet.create({
    fundoHome: {
        backgroundColor: '#3AE1AF'
    },
});

export default Home;