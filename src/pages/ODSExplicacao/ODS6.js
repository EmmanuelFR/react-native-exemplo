import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao6 ({route}){
    
    const avancarODS6 = () => {}

    return (
        <Container
        style={styleODS6.fundoODS6}>
        <Image
        source= {require ('../../../assets/ODS6-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS6 = StyleSheet.create({
    fundoODS6: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao6;