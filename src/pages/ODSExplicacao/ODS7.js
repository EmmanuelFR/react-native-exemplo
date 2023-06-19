import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao7 ({route}){
    
    const avancarODS7 = () => {}

    return (
        <Container
        style={styleODS7.fundoODS7}>
        <Image
        source= {require ('../../../assets/ODS7-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS7 = StyleSheet.create({
    fundoODS7: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao7;