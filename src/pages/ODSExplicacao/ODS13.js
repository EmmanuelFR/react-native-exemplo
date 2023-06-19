import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao13 ({route}){
    
    const avancarODS13 = () => {}

    return (
        <Container
        style={styleODS13.fundoODS13}>
        <Image
        source= {require ('../../../assets/ODS13-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS13 = StyleSheet.create({
    fundoODS13: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao13;