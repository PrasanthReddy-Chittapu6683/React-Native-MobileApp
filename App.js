import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Name, setName] = useState('CVPKR Reddy');
  const [Language, setLanguage] = useState({ name: 'English', level: 5 });
  const changeMyName = () => {
    if (Name === 'CVPKR Reddy') {
      setName('Prasanth Reddy')
    } else {
      setName('CVPKR Reddy')
    }
    if (Language.name === 'English') {
      setLanguage({ name: 'German', level: 2 })
    } else {
      setLanguage({ name: 'English', level: 5 })
    }
  }
  const [age, setAge] = useState(20)
  return (
    <View style={styles.container}>
      <Text style={styles.headerTag}>
        Binding the values using useState() Hook:

      </Text>
      <Text>
        Hi Am {Name} !!!! How are you
      </Text>
      <Text>
        Language Name: {Language.name}
      </Text>
      <Text>
        Fluency: {Language.level}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update My Name" onPress={changeMyName}></Button>
      </View>
      <Text style={styles.headerTag}>
        Text Input:
      </Text>
      <Text>Enter Age:{age}</Text>
      <TextInput style={styles.textbox} keyboardType="number-pad" onChangeText={(val) => setAge(val)} placeholder="Enter Age" />
      <Text>Enter Name:{Name}</Text>
      <TextInput style={styles.textbox} multiline onChangeText={(val) => setName(val)}
        placeholder="Enter Name" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 20
  },
  headerTag: {
    fontSize: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,

  },
  textbox: {
    borderWidth: 2,
    width: 200,
    padding: 8,
    borderColor: 'skyblue',
    margin: 10
  }
});
