import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao5 ({route}){
    
    const avancarODS5 = () => {}

    return (
        <Container
        style={styleODS5.fundoODS5}>
        <Image
        source= {require ('../../../assets/ODS5-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS5 = StyleSheet.create({
    fundoODS5: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao5;