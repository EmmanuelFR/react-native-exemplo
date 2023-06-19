import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao8 ({route}){
    
    const avancarODS8 = () => {}

    return (
        <Container
        style={styleODS8.fundoODS8}>
        <Image
        source= {require ('../../../assets/ODS8-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS8 = StyleSheet.create({
    fundoODS8: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao8;