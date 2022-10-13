import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, Key: Math.random().toString() },
    ]);
    setShowModal(!showModal);
  };
  const deleteHandler = (Key) => {
    const newGoalsArr = courseGoals.filter((goal) => goal.Key !== Key);
    setCourseGoals(newGoalsArr);
    console.log("deleted");
  };
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* button to open the modal */}
        <Button title="Add New Goal" color="#5e0acc" onPress={modalHandler} />
        {/* input area */}
        {/* {showModal && <GoalInput addGoalHandler={addGoalHandler} />} */}
        <GoalInput
          visible={showModal}
          addGoalHandler={addGoalHandler}
          modalHandler={modalHandler}
        />
        {/* list of goals */}
        <View style={styles.goalsContainer}>
          {/* <Text>List of goals...</Text> */}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 8,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
