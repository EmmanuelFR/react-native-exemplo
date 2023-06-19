import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao14 ({route}){
    
    const avancarODS14 = () => {}

    return (
        <Container
        style={styleODS14.fundoODS14}>
        <Image
        source= {require ('../../../assets/ODS14-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS14 = StyleSheet.create({
    fundoODS14: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao14;