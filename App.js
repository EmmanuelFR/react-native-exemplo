import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/index.js';
import Home from './src/pages/Home/index.js';

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
            title: "Tela de Login",
            headerStyle:{
              backgroundColor:"aquamarine"
            }
          }
        }
          />

          <Stack.Screen 
          name='Home'
          component={Home}
          options={
            {
              title: "Página Principal",
              headerStyle:{
                backgroundColor:"aquamarine"
              }
            }
          }
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'cyan',
     alignItems: 'center',
     justifyContent: 'center',
   },
});*/