import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao3 ({route}){
    
    const avancarODS3 = () => {}

    return (
        <Container
        style={styleODS3.fundoODS3}>
        <Image
        source= {require ('../../../assets/ODS3-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS3 = StyleSheet.create({
    fundoODS3: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao3;