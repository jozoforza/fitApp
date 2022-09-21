/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//screens
import Login from './screens/login/Login'
//navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name='login' component={Login}/>
       </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({

});

export default App;
