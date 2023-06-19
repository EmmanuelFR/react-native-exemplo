import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao9 ({route}){
    
    const avancarODS9 = () => {}

    return (
        <Container
        style={styleODS9.fundoODS9}>
        <Image
        source= {require ('../../../assets/ODS9-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS9 = StyleSheet.create({
    fundoODS9: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao9;