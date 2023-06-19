import React from "react";
import {StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao1 ({route}){
    
    const avancarODS1 = () => {}

    return (
        <Container
        style={styleODS1.fundoODS1}>
        <Image
        source= {require ('../../../assets/ODS1-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS1 = StyleSheet.create({
    fundoODS1: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao1;