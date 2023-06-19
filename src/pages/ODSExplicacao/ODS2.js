import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao2 ({route}){
    
    const avancarODS2 = () => {}

    return (
        <Container
        style={styleODS2.fundoODS2}>
        <Image
        source= {require ('../../../assets/ODS2-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS2 = StyleSheet.create({
    fundoODS2: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao2;