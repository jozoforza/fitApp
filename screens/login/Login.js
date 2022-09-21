import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
//screens
import Questionnaire from './Questionnaire'


function Login(){
    return(
        <View>
            <Text>Login screen</Text>
            <Questionnaire/>
        </View>
    )
}

const styles = StyleSheet.create({

  });

export default Login
