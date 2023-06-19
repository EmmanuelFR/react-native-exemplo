import Login from './src/pages/Login/index.js';
import Home from './src/pages/Home/index.js';
import Menu from './src/pages/Menu/index.js';
import ODSExplicacao1 from './src/pages/ODSExplicacao/ODS1.js';
import ODSExplicacao2 from './src/pages/ODSExplicacao/ODS2.js';
import ODSExplicacao3 from './src/pages/ODSExplicacao/ODS3.js';
import ODSExplicacao4 from './src/pages/ODSExplicacao/ODS4.js';
import ODSExplicacao5 from './src/pages/ODSExplicacao/ODS5.js';
import ODSExplicacao6 from './src/pages/ODSExplicacao/ODS6.js';
import ODSExplicacao7 from './src/pages/ODSExplicacao/ODS7.js';
import ODSExplicacao8 from './src/pages/ODSExplicacao/ODS8.js';
import ODSExplicacao9 from './src/pages/ODSExplicacao/ODS9.js';
import ODSExplicacao10 from './src/pages/ODSExplicacao/ODS10.js';
import ODSExplicacao11 from './src/pages/ODSExplicacao/ODS11.js';
import ODSExplicacao12 from './src/pages/ODSExplicacao/ODS12.js';
import ODSExplicacao13 from './src/pages/ODSExplicacao/ODS13.js';
import ODSExplicacao14 from './src/pages/ODSExplicacao/ODS14.js';
import ODSExplicacao15 from './src/pages/ODSExplicacao/ODS15.js';
import ODSExplicacao16 from './src/pages/ODSExplicacao/ODS16.js';
import ODSExplicacao17 from './src/pages/ODSExplicacao/ODS17.js';
import Creditos from './src/pages/ODSExplicacao/creditos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>

          <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            title: "ODSWay",
            headerStyle:{
              backgroundColor:"#A0DBAD"
            }
          }
        }
          />

          <Stack.Screen 
          name='Home'
          component={Home}
          options={
            {
              title: "Apresentação",
              headerStyle:{
                backgroundColor:"#A0DBAD"
              }
            }
          }
          />
          
          <Stack.Screen
          name='Menu'
          component={Menu}
          options={
            {
            title: "Escolha um ODS:",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

          <Stack.Screen
          name='ODSExplicacao1'
          component={ODSExplicacao1}
          options={
            {
            title: "ODS 1 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

          <Stack.Screen
          name='ODSExplicacao2'
          component={ODSExplicacao2}
          options={
            {
            title: "ODS 2 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao3'
          component={ODSExplicacao3}
          options={
            {
            title: "ODS 3 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao4'
          component={ODSExplicacao4}
          options={
            {
            title: "ODS 4 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao5'
          component={ODSExplicacao5}
          options={
            {
            title: "ODS 5 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao6'
          component={ODSExplicacao6}
          options={
            {
            title: "ODS 6 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao7'
          component={ODSExplicacao7}
          options={
            {
            title: "ODS 7 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao8'
          component={ODSExplicacao8}
          options={
            {
            title: "ODS 8 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao9'
          component={ODSExplicacao9}
          options={
            {
            title: "ODS 9 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao10'
          component={ODSExplicacao10}
          options={
            {
            title: "ODS 10 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao11'
          component={ODSExplicacao11}
          options={
            {
            title: "ODS 11 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao12'
          component={ODSExplicacao12}
          options={
            {
            title: "ODS 12 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao13'
          component={ODSExplicacao13}
          options={
            {
            title: "ODS 13 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao14'
          component={ODSExplicacao14}
          options={
            {
            title: "ODS 14 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao15'
          component={ODSExplicacao15}
          options={
            {
            title: "ODS 15 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao16'
          component={ODSExplicacao16}
          options={
            {
            title: "ODS 16 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='ODSExplicacao17'
          component={ODSExplicacao17}
          options={
            {
            title: "ODS 17 - Explicação",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />

        <Stack.Screen
          name='Creditos'
          component={Creditos}
          options={
            {
            title: "Créditos",
            headerStyle:{
              backgroundColor: "#A0DBAD"
            }
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}