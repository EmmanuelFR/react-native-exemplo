import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao16 ({route}){
    
    const avancarODS16 = () => {}

    return (
        <Container
        style={styleODS16.fundoODS16}>
        <Image
        source= {require ('../../../assets/ODS16-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS16 = StyleSheet.create({
    fundoODS16: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao16;