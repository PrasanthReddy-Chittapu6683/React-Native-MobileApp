import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [Name, setName] = useState("CVPKR Reddy");
  const [Language, setLanguage] = useState({ name: "English", level: 5 });
  const changeMyName = () => {
    if (Name === "CVPKR Reddy") {
      setName("Prasanth Reddy");
    } else {
      setName("CVPKR Reddy");
    }
    if (Language.name === "English") {
      setLanguage({ name: "German", level: 2 });
    } else {
      setLanguage({ name: "English", level: 5 });
    }
  };
  const listItems = [
    { name: "P1", id: "1" },
    { name: "P2", id: "2" },
    { name: "P3", id: "3" },
    { name: "P4", id: "4" },
    { name: "P5", id: "5" },
    { name: "P6", id: "6" },
    { name: "P7", id: "7" },
  ];
  const peopleList = [
    { name: "Person 1", id: "1" },
    { name: "Person 2", id: "2" },
    { name: "Person 3", id: "3" },
    { name: "Person 4", id: "4" },
    { name: "Person 5", id: "5" },
    { name: "Person 6", id: "6" },
    { name: "Person 7", id: "7" },
  ];
  const [listDetails, setListDetails] = useState(listItems);
  const [age, setAge] = useState(20);
  const [people, setPeople] = useState(peopleList);
  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((per) => per.id != id)
    });
    console.log("Touchable id: " + id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTag}>
        Binding the values using useState() Hook:
      </Text>
      <Text>Hi Am {Name} !!!! How are you</Text>
      <Text>Language Name: {Language.name}</Text>
      <Text>Fluency: {Language.level}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update My Name" onPress={changeMyName}></Button>
      </View>
      <Text style={styles.headerTag}>Text Input:</Text>
      <Text>Enter Age:{age}</Text>
      <TextInput
        style={styles.textbox}
        keyboardType="number-pad"
        onChangeText={(val) => setAge(val)}
        placeholder="Enter Age"
      />
      <Text>Enter Name:{Name}</Text>
      <TextInput
        style={styles.textbox}
        multiline
        onChangeText={(val) => setName(val)}
        placeholder="Enter Name"
      />
      <Text style={styles.headerTag}>Lists & ScrollView:</Text>
      <ScrollView>
        {listDetails.map((item) => {
          return (
            <View key={item.id}>
              <Text style={styles.textItem}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.headerTag}>
        Flat List Component using FlatList component:
      </Text>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={listDetails}
        renderItem={({ item }) => (
          <Text style={styles.textItem}>{item.name}</Text>
        )}
      />
      <Text style={styles.headerTag}>
        Touchable Components : using TouchableOpacity component
      </Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.textItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    padding: 20,
  },
  headerTag: {
    fontSize: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  textbox: {
    borderWidth: 2,
    width: 200,
    padding: 8,
    borderColor: "skyblue",
    margin: 10,
  },

  textItem: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 15,
    width: 150,
    textAlign: "center",
    marginHorizontal: 10,
  },
});
