import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao10 ({route}){
    
    const avancarODS10 = () => {}

    return (
        <Container
        style={styleODS10.fundoODS10}>
        <Image
        source= {require ('../../../assets/ODS10-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS10 = StyleSheet.create({
    fundoODS10: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao10;