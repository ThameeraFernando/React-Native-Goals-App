import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

//Text, View build in components in react-native
//This is the root component that we render
// in flex boxes in the main axes we can change in the child boxes flex :1 (space divide evenly)
//we can set the width and height in the child
// in flex boxes in the cross axes we can change in the parent box boxes alignItems (stretch is default)

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (inputText) => {
    // console.log(inputText);
    setEnteredGoal(inputText);
  };
  const addGoalHandler = () => {
    // console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, Key: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      {/* input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/* list of goals */}
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <Text style={styles.goalItem}>
                <Text>{itemData.item.text}</Text>
              </Text>
            );
          }}
          // keyExtractor={(item, index) => {
          //   return item.key;
          // }}
          alwaysBounceVertical={false}
        />
      </View>
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
  textBody: {
    margin: 20,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 8,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
