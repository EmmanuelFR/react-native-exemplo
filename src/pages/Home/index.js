import React from "react";
import { Text } from "react-native";

import { Container } from "../../styles/style-geral";


export default function Home({route}){
    return (
        <Container>
            <Text>Bem-vindo(a) de volta, {route.params.email}!</Text>
            <Text>Sua senha é: {route.params.senha}.</Text>
            <Text>Você mora no país: {route.params.pais}.</Text>
            <Text>Confira o alfabeto abaixo: </Text>
            <Text>{route.params.alfabeto}</Text>
        </Container>
    )
}