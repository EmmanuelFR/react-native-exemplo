import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao15 ({route}){
    
    const avancarODS15 = () => {}

    return (
        <Container
        style={styleODS15.fundoODS15}>
        <Image
        source= {require ('../../../assets/ODS15-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS15 = StyleSheet.create({
    fundoODS15: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao15;