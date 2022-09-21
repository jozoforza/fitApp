import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Pressable,
    Alert
  } from 'react-native';
  //questions
  import questions from './Questions'


  function Questionnaire(){
    const [currentValue, setCurrentValue] = React.useState('')
    const [objectQ,setObjectQ] = React.useState((questions.find(q => q.id == 1)))
    const [nextButt,setNextButt] = React.useState('Next')
    const [stats, setStats] = React.useState(
      {
        'weight': 0,
        'height': 0
      }
    )

    function handleNext(){
      if(currentValue == ''){
        Alert.alert('write something')
      }
      else if (objectQ.id == 4){
        //here it should send you further
        setObjectQ((questions.find(q => q.id == 1)))
        setCurrentValue('')
      }else{
      const v = objectQ.value
      setStats({...stats,v: currentValue})
      setObjectQ(questions.find(q => q.id == (objectQ.id+1)))
      setCurrentValue('')
      }
    }

    return(
        <View>
            <Text>Questionnaire</Text>
            <View>
              <View
                style={{alignItems: 'center',borderWidth: 2,margin: 10,padding: 10 }}
              >
                <Text>{objectQ.question}</Text>
                <TextInput
                  placeholder='write here'
                  value={currentValue}
                  onChangeText={(value) => setCurrentValue(value)}
                  style={{borderWidth: 3,margin: 10,padding: 10,width: 300}}
                />
                <Text>{currentValue}</Text>
                <Pressable 
                onPress={handleNext}
                style={{backgroundColor: 'red',height: 50,width: 200}}
                >
                  <Text>Next</Text>
                </Pressable>
              </View>
            </View>
            <Text>{stats.weight}</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({

  });

  export default Questionnaire