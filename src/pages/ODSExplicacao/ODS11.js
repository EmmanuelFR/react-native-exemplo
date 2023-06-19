import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao11 ({route}){
    
    const avancarODS11 = () => {}

    return (
        <Container
        style={styleODS11.fundoODS11}>
        <Image
        source= {require ('../../../assets/ODS11-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS11 = StyleSheet.create({
    fundoODS11: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao11;