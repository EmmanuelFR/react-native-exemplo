import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView} from "react-native";
import { Container } from "../../styles/style-geral";

export default function Menu ({navigation, route}){
    
    const avancarODS1 = () => {navigation.navigate('ODSExplicacao1')}

    const avancarODS2 = () => {navigation.navigate('ODSExplicacao2')}

    const avancarODS3 = () => {navigation.navigate('ODSExplicacao3')}
    
    const avancarODS4 = () => {navigation.navigate('ODSExplicacao4')}

    const avancarODS5 = () => {navigation.navigate('ODSExplicacao5')}

    const avancarODS6 = () => {navigation.navigate('ODSExplicacao6')}

    const avancarODS7 = () => {navigation.navigate('ODSExplicacao7')}

    const avancarODS8 = () => {navigation.navigate('ODSExplicacao8')}

    const avancarODS9 = () => {navigation.navigate('ODSExplicacao9')}

    const avancarODS10 = () => {navigation.navigate('ODSExplicacao10')}

    const avancarODS11 = () => {navigation.navigate('ODSExplicacao11')}

    const avancarODS12 = () => {navigation.navigate('ODSExplicacao12')}

    const avancarODS13 = () => {navigation.navigate('ODSExplicacao13')}

    const avancarODS14 = () => {navigation.navigate('ODSExplicacao14')}

    const avancarODS15 = () => {navigation.navigate('ODSExplicacao15')}

    const avancarODS16 = () => {navigation.navigate('ODSExplicacao16')}

    const avancarODS17 = () => {navigation.navigate('ODSExplicacao17')}

    const avancarCreditos = () => {navigation.navigate('Creditos')}

    return (
        <ScrollView>
            <Container style={styleMenu.fundoMenu}>
            
            <Text style={{textAlign:'center', margin: 10, fontSize: 20, fontWeight: 'bold'}}></Text>
            
            <BotaoODS1
            style={{marginBottom: 30}}
            acao={avancarODS1}>
            </BotaoODS1>

            <BotaoODS2
            style={{marginBottom: 30}}
            acao={avancarODS2}>
            </BotaoODS2>

            <BotaoODS3
            style={{marginBottom: 30}}
            acao={avancarODS3}>
            </BotaoODS3>
            
            <BotaoODS4
            style={{marginBottom: 30}}
            acao={avancarODS4}>
            </BotaoODS4>

            <BotaoODS5
            style={{marginBottom: 30}}
            acao={avancarODS5}>
            </BotaoODS5>

            <BotaoODS6
            style={{marginBottom: 30}}
            acao={avancarODS6}>
            </BotaoODS6>

            <BotaoODS7
            style={{marginBottom: 30}}
            acao={avancarODS7}>
            </BotaoODS7>

            <BotaoODS8
            style={{marginBottom: 30}}
            acao={avancarODS8}>
            </BotaoODS8>

            <BotaoODS9
            style={{marginBottom: 30}}
            acao={avancarODS9}>
            </BotaoODS9>

            <BotaoODS10
            style={{marginBottom: 30}}
            acao={avancarODS10}>
            </BotaoODS10>

            <BotaoODS11
            style={{marginBottom: 30}}
            acao={avancarODS11}>
            </BotaoODS11>

            <BotaoODS12
            style={{marginBottom: 30}}
            acao={avancarODS12}>
            </BotaoODS12>

            <BotaoODS13
            style={{marginBottom: 30}}
            acao={avancarODS13}>
            </BotaoODS13>

            <BotaoODS14
            style={{marginBottom: 30}}
            acao={avancarODS14}>
            </BotaoODS14>
          
            <BotaoODS15
            style={{marginBottom: 30}}
            acao={avancarODS15}>
            </BotaoODS15>

            <BotaoODS16
            style={{marginBottom: 30}}
            acao={avancarODS16}>
            </BotaoODS16>
            
            <BotaoODS17
            style={{marginBottom: 30}}
            acao={avancarODS17}>
            </BotaoODS17>

            <BotaoCreditos
            style= {{marginBottom: 30}}
            acao={avancarCreditos}>
            </BotaoCreditos>

            </Container>
        </ScrollView>
    )
}

const BotaoODS1 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS1-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>   
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS2 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS2-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS3 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS3-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS4 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS4-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS5 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS5-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS6 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS6-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS7 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS7-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS8 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS8-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS9 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS9-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS10 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS10-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS11 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS11-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS12 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS12-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS13 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS13-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS14 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS14-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS15 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS15-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS16 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS16-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoODS17 = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS17-linha3.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const BotaoCreditos = (props) => {
    return (
        <View>
            <TouchableOpacity
            style={styleMenu.BotaoODS}
            activeOpacity={0.5}
            onPress={props.acao}>
            <Image 
            source= {require ('../../../assets/ODS-com-simbolo.jpg')}
            style={{width: 300, height: 90, borderRadius: 15}}>
            </Image>    
            </TouchableOpacity>
        </View>
    )
}

const styleMenu = StyleSheet.create({
    fundoMenu: {
        backgroundColor: '#3AE1AF'
    },
    BotaoODS: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#A0DBAD', 
        borderWidth: 0, 
        borderColor: '#000000',
        width: 300, 
        height: 90, 
        borderRadius: 15, 
        marginBottom: 20, 
      },
});