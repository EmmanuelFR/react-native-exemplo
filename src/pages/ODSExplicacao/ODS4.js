import React from "react";
import { StyleSheet, Image} from "react-native";
import { Container } from "../../styles/style-geral";

function ODSExplicacao4 ({route}){
    
    const avancarODS4 = () => {}

    return (
        <Container
        style={styleODS4.fundoODS4}>
        <Image
        source= {require ('../../../assets/ODS4-texto.jpg')}
        style={{borderRadius: 25, width: 340, height: 600}}>
        </Image>
        </Container>
    )
}

const styleODS4 = StyleSheet.create({
    fundoODS4: {
        backgroundColor: '#3AE1AF'
    }
});
export default ODSExplicacao4;