import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

//Text, View build in components in react-native
//This is the root component that we render
// in flex boxes in the main axes we can change in the child boxes flex :1 (space divide evenly)
//we can set the width and height in the child
// in flex boxes in the cross axes we can change in the parent box boxes alignItems (stretch is default)

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, Key: Math.random().toString() },
    ]);
  };
  const deleteHandler = (Key) => {
    const newGoalsArr = courseGoals.filter((goal) => goal.Key !== Key);
    setCourseGoals(newGoalsArr);
    console.log("deleted");
  };
  return (
    <View style={styles.appContainer}>
      {/* input area */}
      <GoalInput addGoalHandler={addGoalHandler} />
      {/* list of goals */}
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                Key={itemData.item.Key}
                onDeleteItem={deleteHandler}
              />
            );
          }}
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
