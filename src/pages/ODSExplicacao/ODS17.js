import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao17 ({route}){
    
    const avancarODS17 = () => {}

    return (
        <Container
        style={styleODS17.fundoODS17}>
        <Image
        source= {require ('../../../assets/ODS17-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS17 = StyleSheet.create({
    fundoODS17: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao17;