import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao12 ({route}){
    
    const avancarODS12 = () => {}

    return (
        <Container
        style={styleODS12.fundoODS12}>
        <Image
        source= {require ('../../../assets/ODS12-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS12 = StyleSheet.create({
    fundoODS12: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao12;